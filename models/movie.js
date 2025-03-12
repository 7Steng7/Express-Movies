const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');

const Movie = sequelize.define(
    "movies",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
        },
        datePremiere: {
            type: DataTypes.DATE,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    }, {
        tableName: 'movies',
        timestamps: true
    }
);

module.exports = Movie;
