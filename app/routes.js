const nextRoutes = require('next-routes');

module.exports = nextRoutes()
  .add({ page: 'index', name: 'index', pattern: '/' })
  .add({ page: 'test', name: 'test', pattern: '/test' });
