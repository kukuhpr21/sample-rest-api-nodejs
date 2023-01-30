const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/database');

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
});

module.exports = User;