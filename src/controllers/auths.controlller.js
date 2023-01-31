const authService = require('../services/auth.service');
const response = require('../helpers/response');

const login = async (req, res, next) => {
    try {
        const result = await authService.login(req);
        response.client(res, result.status, result.message, result.data);
    } catch(error) {
        response.client(res, 500, "internal server error", { error: error.message });
    }
};

module.exports = {
    login
}