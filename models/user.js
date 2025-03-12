const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');

const User = sequelize.define(
    "users",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        name:{
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'users', 
        timestamps: true 
    }
);

module.exports = User;
