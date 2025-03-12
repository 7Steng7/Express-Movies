const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');

const Category = sequelize.define(
    "categories",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        nameCategory:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description:{
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'categories',
        timestamps: true
    }
);

module.exports = Category;
