
import React from 'react';
import PropTypes from 'prop-types';

import { scaleTime } from 'd3-scale';
import { utcDay } from 'd3-time';

import { ChartCanvas, Chart } from 'react-stockcharts';
import { CandlestickSeries } from 'react-stockcharts/lib/series';
import { OHLCTooltip } from 'react-stockcharts/lib/tooltip';
import { CrossHairCursor } from 'react-stockcharts/lib/coordinates';
import { XAxis, YAxis } from 'react-stockcharts/lib/axes';
import { fitWidth } from 'react-stockcharts/lib/helper';
import { last, timeIntervalBarWidth } from 'react-stockcharts/lib/utils';

class CandleStickChart extends React.Component {
  
  changeScroll() {
    let style = document.body.style.overflow; 
    document.body.style.overflow = (style === 'hidden') ? 'auto':'hidden';
  }

  render() {
    const height = 400;
    const margin = { left: 50, right: 50, top: 10, bottom: 30 };

    const { type, width, data, ratio } = this.props;
    const xAccessor = d => d.date;
    const start = xAccessor(last(data));
    const end = xAccessor(data[Math.max(0, data.length - 100)]);
    const xExtents = [start, end];

    const gridHeight = height - margin.top - margin.bottom;
    const gridWidth = width - margin.left - margin.right;

    const showGrid = true;
    const yGrid = showGrid
      ? { innerTickSize: -1 * gridWidth, tickStrokeOpacity: 0.2 }
      : {};
    const xGrid = showGrid
      ? { innerTickSize: -1 * gridHeight, tickStrokeOpacity: 0.2 }
      : {};

    return (
      <div className='Chart' onMouseEnter={this.changeScroll} onMouseLeave={this.changeScroll} >
        <ChartCanvas 
          height={height}
          ratio={ratio}
          width={width}
          margin={margin}
          type={type}
          seriesName='BTC'
          data={data}
          xAccessor={xAccessor}
          displayXAccessor={xAccessor}
          xScale={scaleTime()}
          xExtents={xExtents}>

          <Chart id={1} yExtents={d => [d.high, d.low]}>
            <YAxis
              axisAt='left'
              orient='left'
              ticks={5}
              showTicks={true}
              outerTickSize={0}
              {...yGrid}
              stroke='#FFFFFF'
              tickStroke='#FFFFFF'
              opacity={0.5}
            />
            <XAxis
              axisAt='bottom'
              orient='bottom'
              showTicks={true}
              outerTickSize={0}
              {...xGrid}
              stroke='#FFFFFF'
              tickStroke='#FFFFFF'
              opacity={0.5}
            />

            <OHLCTooltip 
              origin={[10, 0]} 
              fill='#FFFFFF'
            />

            <CandlestickSeries 
              width={timeIntervalBarWidth(utcDay)} 
              stroke={(d) => (d.close > d.open ? '#6BA583' : '#DB0000')}
              wickStroke={(d) => (d.close > d.open ? '#6BA583' : '#DB0000')}
              fill={(d) => (d.close > d.open ? '#6BA583' : '#DB0000')}
            />
          </Chart>
          <CrossHairCursor stroke='#FFFFFF' />
        </ChartCanvas>
      </div>
    );
  }
}

CandleStickChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['svg', 'hybrid']).isRequired,
};

CandleStickChart.defaultProps = {
  type: 'svg',
};

// eslint-disable-next-line no-class-assign
CandleStickChart = fitWidth(CandleStickChart);

export default CandleStickChart;
