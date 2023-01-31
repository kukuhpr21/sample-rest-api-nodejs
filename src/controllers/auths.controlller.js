const authsService = require('../services/auths.service');
const response = require('../helpers/response');

const login = async (req, res, next) => {
    const result = await authsService.login(req);
    response.client(res, result.status, result.message, result.data);
};

module.exports = {
    login
}