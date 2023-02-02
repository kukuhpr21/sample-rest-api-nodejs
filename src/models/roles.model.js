const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Role = db.define("roles", {
    id: {
        type: DataTypes.STRING,
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

module.exports = Role;