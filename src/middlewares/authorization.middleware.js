const jwt = require('jsonwebtoken');
const response = require('../helpers/response');

module.exports = (req, res, next) => {
    try {
        const decode  = jwt.verify(req.headers.authorization, process.env.JWT_KEY);
        req.userData = decode;
    } catch(error) {
        response.client(res, 401, "invalid token")
    }
    next();
};