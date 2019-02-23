const config = require('next/config').default;

module.exports = env =>
  config().publicRuntimeConfig[env];
