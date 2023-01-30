const usersRepository = require('../repositories/users.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
class authService {

    async login(req) {
        try {
            const user = await usersRepository.findByEmail(req.body.email);

            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.password, user.password);

                if (passwordMatch) {

                } else {
                    return { success: false, error: "invalid email or password" }
                }
            } else {
                return { success: false, error: "user not found" }
            }
        } catch (error) {
            return { success: false, error: error };
        }
    }

    async createToken() {
        
    }

}

module.exports = authService