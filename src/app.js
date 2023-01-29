const express = require('express');
const app = express();
const routeRegister = require('./routes/route_register');

app.use('/', routeRegister);

module.exports = app;