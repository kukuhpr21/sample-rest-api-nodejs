const { Sequelize } = require('sequelize');
const db = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
     {
       host: process.env.DATABASE_HOST,
       dialect: process.env.DATABASE_DRIVER,
       raw: process.env.DATABASE_RAW,
     }
);

module.exports = db;