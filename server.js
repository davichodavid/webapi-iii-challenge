const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  const now = new Date().toISOString();
  console.log(`This was a ${req.method} request from ${req.url} on ${now}`);
  next();
};

module.exports = server;

module.exports = logger;