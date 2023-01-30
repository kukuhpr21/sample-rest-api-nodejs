const usersModel = require('../models/users.model');

function findByEmail(email) {
    return usersModel.findOne({
        where: {
            email: email
        }
    });
}

module.exports = {
    findByEmail,
}