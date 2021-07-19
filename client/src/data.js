import { csvParse } from  'd3-dsv';
import { timeParse } from 'd3-time-format';

function parseData(parse, market) {
  return function(d) {
    d.date = parse(d.timestamp);
    d.open = +d['open ('+market+')'];
    d.high = +d['high ('+market+')'];
    d.low = +d['low ('+market+')'];
    d.close = +d['close ('+market+')'];
    d.volume = +d.volume;
    return d;
  };
}

const parseDate = timeParse('%Y-%m-%d');

export function getData(url, market) {
  const promiseMSFT = fetch(url)
    .then(response => response.text())
    .then(checkData)
    .then(data => csvParse(data, parseData(parseDate, market)));
  return promiseMSFT;
}

export function getRate(url) {
  const promise = fetch(url)
    .then(response => response.json())
    .then(checkData)
    .then(data => data['Realtime Currency Exchange Rate'])
    .then(data => data['5. Exchange Rate']);
  return promise;
}

export function checkData(data) {
  if(data.Information) throw new Error('Api not responding: ' + data.Information);
  return data;
}
