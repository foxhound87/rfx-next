const env = require('./env.config.js').processEnvConfig;

module.exports = {
  presets: [
    'next/babel',
  ],
  plugins: [
    ['transform-define', env],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-throw-expressions',
    'inline-react-svg',
  ],
};
