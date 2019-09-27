const routes = require('next-routes');

module.exports = routes()
  .add({ name: 'home', pattern: '/', page: '/' })
  .add({ name: 'detail', pattern: '/detail/:name', page: '/detail' });
