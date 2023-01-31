const { DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define("users", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    id_detail_user: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    created_at: {
        type: DataTypes.DATE
    },
    updated_at: {
        type: DataTypes.DATE
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
});

module.exports = User;