const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());

server.use(express.json(), cors);

configureRoutes(server);

module.exports = {
  server,
};