import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../browser/components/app';
import template from './template';

import status from '../status';

const server = express();

server.use(express.static('public'));

server
  .disable('x-powered-by')
  .get('/', (req, res) => {
    res.send(template({
      body: renderToString(<App status={status} />),
    }));
  })
  .get('/api', (req, res) => {
    res
      .set('Content-Type', 'application/vnd.api+json')
      .send({
        links: {
          self: 'https://istedchill.com/api',
        },
        data: [{
          type: 'status',
          id: 1,
          attributes: {
            chill: status,
          },
        }],
      });
  })
  .listen(process.env.PORT || 8888);
