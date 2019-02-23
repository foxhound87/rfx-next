const _ = require('lodash'); // eslint-disable-line
const webpack = require('webpack'); // eslint-disable-line
const path = require('path'); // eslint-disable-line
const { nextEnvConfig } = require('./env.config');

const loadGlobalStyles = config =>
  config.module.rules.push({
    test: /\.css$/,
    use: [
      'babel-loader',
      'raw-loader',
      'postcss-loader',
    ],
  });

const registerAlias = config =>
  Object.assign(config.resolve.alias, {
    '~': path.resolve(__dirname, '../'),
    '#/env': path.resolve(__dirname, '../config/env'),
    '@/config': path.resolve(__dirname, '../config'),
    '@/app': path.resolve(__dirname, '../app'),
    '@/shared': path.resolve(__dirname, '../shared'),
    '@/modules': path.resolve(__dirname, '../modules'),
  });

const $webpack = (config) => {
  // eslint-disable-next-line
  config.node = { fs: 'empty' };

  loadGlobalStyles(config);
  registerAlias(config);

  return config;
};

module.exports = {
  serverRuntimeConfig: nextEnvConfig,
  publicRuntimeConfig: nextEnvConfig,
  env: _.omit(nextEnvConfig, 'NODE_ENV'),
  // eslint-disable-next-line
  webpack: config => $webpack(config),
};
