const express = require('express');
const rootRouter = express.Router();
const logs = require('../helpers/logs');

// version
const v1 = "/v1/";

// routes
const auths = require('./auths.route');
const users = require('./users.route');

// before routing
rootRouter.use('/', (req, res, next) => {
    logs.request(req);
    next();
});

// route register v1
rootRouter.use(v1, auths);
rootRouter.use(v1 + 'users', users);

// handling error
rootRouter.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

rootRouter.use((error, req, res, next) => {
    const status = error.status || 500;
    res.status(status);
    const body = {
        status: status,
        message: error.message,
    };
    logs.response(status, body)
    res.json(body);
});
module.exports = rootRouter;