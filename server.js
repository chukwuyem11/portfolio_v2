const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
const path = require('path');
server.use('/public', express.static(path.join(__dirname, 'public')));
app.prepare().then(() => {
    // Express.js routes and middleware go here
    server.get('*', (req, res) => {
        return handle(req, res);
      });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  });