const { categoriesModels } = require('../models');

const getItems = async (req, res) => {
    try {
        const categories = await categoriesModels.findAll();
        res.json(categories);
    } catch (error) {
        console.error(`❌ Error al obtener categories: ${error}`);
        res.status(500).json({ error: "Error al obtener categories", details: error.message });
    }
};

const createItem = async (req, res) => {
    try{
        const { nameCategory, description } = req.body;
        const categories = await categoriesModels.create({ nameCategory, description });
        res.json(categories);
    }catch(error){
        console.error(`❌ Error al obtener categories: ${error}`);
        res.status(500).json({ error: "Error al obtener categories", details: error.message });
    }
};

module.exports = { getItems, createItem }
