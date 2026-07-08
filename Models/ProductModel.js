const db = require('../Config/db');
const { DataTypes, STRING } = require('sequelize');

const ProductModel = db.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }


})

module.exports = ProductModel