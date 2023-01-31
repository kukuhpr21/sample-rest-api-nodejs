const logs = require('./logs');

const layer = function(success, status, message, data = "") {
    return {
        success,
        status,
        message,
        data
    };
}

const client = function(res, status, message, data) {
    const body = {status, message, data};
    logs.response(status, body);
    res.status(status).json(body);
}

module.exports = {
    layer,
    client,
}