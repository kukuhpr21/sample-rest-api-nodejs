const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routeRegister = require('./routes/route_register');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routeRegister);

module.exports = app;