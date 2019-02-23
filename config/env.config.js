/* eslint import/no-dynamic-require: 0 */
/* eslint prefer-template: 0 */
/* eslint global-require: 0 */
require('dotenv').config();

if (process.env.ENV === undefined) {
  throw new Error('Environment not defined.');
}

// NODE_ENV fallback to ENV
if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = process.env.ENV;
}

const processEnvConfig = {};
const nextEnvConfig = {};
const envConfigBaseDir = './env/';
const $path = envConfigBaseDir + process.env.ENV + '.json';
const $default = require(envConfigBaseDir + 'default.json');
const env = Object.assign($default, require($path), {
  NODE_ENV: process.env.NODE_ENV,
  ENV: process.env.ENV,
});

// eslint-disable-next-line
console.log('Loading env config:', $path);

Object.keys(env)
  .map(key => ([
    Object.assign(processEnvConfig, {
      ['process.env.' + key]: env[key],
    }),
    Object.assign(nextEnvConfig, {
      [key]: env[key],
    }),
  ]));

// assign config evars to process.env
Object.assign(process.env,
  Object.keys(processEnvConfig).reduce((obj, key) =>
    Object.assign(obj, {
      [key.substr(12)]: processEnvConfig[key],
    }), {}));

console.log('=======================================================');
console.log('ENV', process.env.ENV);
console.log('NODE_ENV', process.env.NODE_ENV);
console.log('=======================================================');
console.log('processEnvConfig ======================================');
console.log(processEnvConfig);
console.log('=======================================================');
console.log('nextEnvConfig =========================================');
console.log(nextEnvConfig);
console.log('=======================================================');

module.exports = {
  processEnvConfig,
  nextEnvConfig,
};
