import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../browser/components/app';
import template from './template';

const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send(template({
    body: renderToString(<App />),
  }));
});

server.listen(process.env.PORT || 8888, () => {
  console.log(`LISTENING ON ${process.env.PORT || 8888}`);
});
