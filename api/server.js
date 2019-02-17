const express = require('express');
const cors = require('cors');
const helmet = require('helmet');



const configureRoutes = require('../config/routes.js');

const server = express();

module.exports = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}

server.use(helmet());

server.use(express.json(), cors);

configureRoutes(server);

module.exports = {
  server,
};