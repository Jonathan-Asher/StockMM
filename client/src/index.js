import ReactDOM from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.js';

const options = {
  function: 'DIGITAL_CURRENCY_DAILY',
  symbol: 'BTC',
  market: 'USD',
  apikey: 'WFIB1LRREPHYFL8J',
  datatype: 'csv',
  getUrl() {
    return 'https://www.alphavantage.co/query?function='+options.function+'&symbol='+options.symbol+'&market='+options.market+'&apikey='+options.apikey+'&datatype='+options.datatype;
  }
};



ReactDOM.render(
  <BrowserRouter>
    <App options={ options } />
  </BrowserRouter>,
  document.getElementById('root'));
