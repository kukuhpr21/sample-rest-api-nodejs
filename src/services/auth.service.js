const usersRepository = require('../repositories/users.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const response = require('../helpers/response');

async function login(req) {
    try {
        const user = await usersRepository.findByEmail(req.body.email);
        console.log(user);
        if (user) {
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);

            if (passwordMatch) {
                const token = await this.createToken({
                    id: user.id,
                    email: user.email
                });
                return response.layer(true, 200, "login successfully", {token: token});
            } else {
                return response.layer(false, 400, "invalid email or password");
            }
        } else {
            return response.layer(false, 400, "user not found"); 
        }
    } catch (error) {
        return response.layer(false,500, "internal server errorxx", { error: error.message });
    }
}

async function createToken(payload) {
    return jwt.sign(
        payload, 
        process.env.JWT_KEY,
        {
            expiresIn: process.env.JWT_EXPIRESIN
        })
}

module.exports = {
    login,
    createToken,
}