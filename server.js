const express = require('express');
const next = require('next');
const compression = require('compression');
const routes = require('./config/routes');

const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.NODE_ENV === 'production' ? 9999 : 3000;

const app = next({ dir: '.', dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.use(handler);
  server.use(express.static(__dirname, { dotfiles: 'allow' }));
  server.use(compression());
  server.listen(PORT, (err) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
