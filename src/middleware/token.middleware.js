const jwt = require('jsonwebtoken');
const logs = require('./helper/logs');
module.exports = (req, res, next) => {
    try {
        const decode  = jwt.verify(req.body.token, process.env.JWT_KEY);
        req.userData = decode;
    } catch(error) {
        const status = 401;
        const body = {
            status: status,
            message: "invalid token"
        }
        logs.response(status, body);
        res.status(status).json(body);
    }
    next();
};