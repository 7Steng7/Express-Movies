const { sequelize } = require('../config/database');
const { DataTypes } = require('sequelize');

const Seen = sequelize.define(
    "seen",
    {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true,
        },
        idUser:{
            type: DataTypes.STRING,
            allowNull: false
        },
        idMovie: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, {
        tableName: 'seen',
        timestamps: true
    }
);

module.exports = Seen;
