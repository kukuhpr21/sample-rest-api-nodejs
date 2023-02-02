const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Permission = db.define("permissions", {
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

module.exports = Permission;