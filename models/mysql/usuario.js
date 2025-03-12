const models = require('../index');
const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

const Usuario = sequelize.define(
    "usuarios",
    {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
            autoincrement: true,
        },
        nombre:{
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        contraseña: {
            type: DataTypes.STRING,
        },
 
    }
);

module.exports = Usuario;
