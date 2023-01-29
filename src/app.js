const express = require('express');
const app = express();
const morgan = require('morgan');
const routeRegister = require('./routes/route_register');

app.use(morgan);
app.use('/', routeRegister);

module.exports = app;