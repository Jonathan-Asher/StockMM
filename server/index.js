import config from '../config';
//import apiRouter from './api';
import path from 'path';
import express from 'express';
//import bodyParser from 'body-parser';

//import serverRender from './serverRender';

const server = express();
//server.use(bodyParser.json());

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '../client/views'));

server.get('/', (req, res) => {
  res.status('200').render('index')
});

//server.use('/api', apiRouter);
server.use(express.static('client/dist'));

server.listen(config.port, config.host, () => {
  console.info('Listening on port ' + config.port);
});
