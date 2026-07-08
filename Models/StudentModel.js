const db = require('../Config/db')
const { DataTypes } = require('sequelize')

const StudentModel = db.define('Student', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    rollno: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, {
    timestamps: true
})

module.exports = StudentModel