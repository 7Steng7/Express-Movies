const { usersModels } = require('../models');

const getItems = async (req, res) => {
    try {
        // Obtener todos los usuarios usando el modelo usersModels
        const users = await usersModels.findAll();
        
        // Enviar la respuesta con los usuarios
        res.json(users);
    } catch (error) {
        console.error(`❌ Error al obtener users: ${error}`);
        res.status(500).json({ error: "Error al obtener users", details: error.message });
    }
};


const getItem = async (req, res) => {

};

const createItem = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const user = await usersModels.create({ name, email, password });
        res.json(user);
    }catch(error){
        console.error(`❌ Error al obtener users: ${error}`);
        res.status(500).json({ error: "Error al obtener users", details: error.message });
    }
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
