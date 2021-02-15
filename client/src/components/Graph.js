import React from 'react';
import PropTypes from 'prop-types';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

Graph.propTypes = {
  data: PropTypes.object
};

function Graph(props) {
  const options = {
    exportEnabled: true,
    title: {
      text: 'Microsoft Corporation Stock Price - December 2017'
    },
    axisX: {
      valueFormatString: 'D MMM'
    },
    axisY: {
      title: 'Price',
      prefix: '$'
    },
    data: [{
      type: 'candlestick',
      name: 'Microsoft Corporation Price',
      showInLegend: true,
      yValueFormatString: '$##0.00',
      xValueType: 'dateTime',
      dataPoints: props.data
    }]
  };
  return (
    <div>
      <h2>{props.data['2020-01-01']}</h2>
    </div>
  );
}

export default Graph;