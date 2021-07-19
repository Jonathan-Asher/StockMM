import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getData, getRate } from '../../data';
import Chart from '../Chart';
import ValueDisplay from '../ValueDisplay';

class Symbol extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      options: {
        symbol: props.match.params.symbol,
        market: 'USD',
        apikey: 'A21K4GWK6XCV9XOX',
        datatype: 'csv'
      }
    };
    this.getDailyDataUrl = this.getDailyDataUrl.bind(this);
    this.getRateUrl = this.getRateUrl.bind(this);
  }

  getDailyDataUrl() {
    return 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol='+this.state.options.symbol+'&market='+this.state.options.market+'&apikey='+this.state.options.apikey+'&datatype='+this.state.options.datatype;
  }

  getRateUrl() {
    return 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency='+this.state.options.symbol+'&to_currency='+this.state.options.market+'&apikey='+this.state.options.apikey;
  }

  componentDidMount() {
    getData(this.getDailyDataUrl(), this.state.options.market)
      .then(data => {
        data = Object.values(data).reverse();
        data.shift();
        console.log(data);
        this.setState({ data, isLoading: false });
      })
      .catch(console.error);
    // this.interval = setInterval(
    //   getRate()
    //     .catch(console.error)
    //   , 12000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  render() {
    return  <div className="Symbol">
      <h2>{this.state.options.symbol+ '-' +this.state.options.market}</h2>
      {
        this.state.isLoading ?
          <h2>Loading</h2> : 
          <React.Fragment>
            <Chart type={'hybrid'} data={ this.state.data } />
          </React.Fragment>
      }
      {/* { 
        this.state.rate ? <ValueDisplay rate = { this.state.rate } /> : null
      } */}
    </div>;
  }
}
 
Symbol.propTypes = {
  match: PropTypes.object,
  options: PropTypes.object,
};
 
export default Symbol;