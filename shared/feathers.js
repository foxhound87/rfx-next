import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import socketio from '@feathersjs/socketio-client';
import authentication from '@feathersjs/authentication-client';
import io from 'socket.io-client';
import axios from 'axios';
import env from '#/env';

const timeout = 10000;
const isClient = (typeof window !== 'undefined');
const storage = isClient ? window.localStorage : null; // eslint-disable-line

console.log('ENV:', env('ENV')); // eslint-disable-line
console.log('NODE_ENV:', env('NODE_ENV')); // eslint-disable-line
console.log('Connecting to API:', env('API')); // eslint-disable-line

const connection = isClient
  ? socketio(io(env('API')), {
    transports: ['websocket'],
    timeout,
  })
  : rest(env('API'))
    .axios(axios.create({
      timeout,
    }));

const $app = feathers()
  .configure(connection)
  .configure(authentication({
    cookie: 'ssrToken',
    storage,
  }));

export const app = () => $app;
export const service = name => $app.service(name);
