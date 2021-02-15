import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App.js';

const options = {
  function: 'DIGITAL_CURRENCY_DAILY',
  symbol: 'BTC',
  market: 'CNY',
  apikey: 'demo'
};


var url = 'https://www.alphavantage.co/query?function='+options.function+'&symbol='+options.symbol+'&market='+options.market+'&apikey='+options.apikey;

ReactDOM.render(<App url={ url } />, document.getElementById('root'));
