const { usuarioModels } = require('../models');
const { sequelize } = require("../config/mysql");

const getItems = async (req, res) => {
    try {
        console.log("🔍 Verificando sequelize:", sequelize); // Debugging
        if (!sequelize) {
            throw new Error("sequelize no está definido");
        }

        const [usuarios] = await sequelize.query("SELECT * FROM usuarios;");
        res.json(usuarios);
    } catch (error) {
        console.error(`❌ Error al obtener usuarios: ${error}`);
        res.status(500).json({ error: "Error al obtener usuarios" });
    }
};


const getItem = async (req, res) => {

};

const createItem = async (req, res) => {
};

const updateItem = async (req, res) => {
  
};
const patchItem = async (req, res) => {
   
};


const patchOrganization = async (req, res) => {

};

    const login = async (req, res) =>{

    };

const deleteItem = async (req, res) => {

};


module.exports = {
    getItems, getItem, createItem, updateItem, deleteItem, login, patchItem, patchOrganization }
