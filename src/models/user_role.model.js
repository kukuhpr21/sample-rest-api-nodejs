const { DataTypes } = require('sequelize');
const db = require('../config/database');

const UserRole = db.define("user_role", {
    id_user: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {         // User belongsTo Company 1:1
          model: 'users',
          key: 'id'
        }
    },
    id_role: {
        type: DataTypes.STRING,
        primaryKey: true,
        references: {         // User belongsTo Company 1:1
          model: 'roles',
          key: 'id'
        }
    },
}, {
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
});

module.exports = UserRole;