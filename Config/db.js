const Sequelize = require("sequelize");
const db = new Sequelize('practice_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;



