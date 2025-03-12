const { moviesModels } = require('../models');
const Category = require('../models/category');

const getItems = async (req, res) => {
    try {
        const movies = await moviesModels.findAll({
            include: [
                {
                    model: Category,
                    as: 'category',
                    foreignKey: 'category_name',
                    targetKey: 'nameCategory',
                    attributes: ['nameCategory', 'description']
                }
            ]
        });
        res.json(movies);
    } catch (error) {
        console.error(`❌ Error al obtener movies: ${error}`);
        res.status(500).json({ error: "Error al obtener movies", details: error.message });
    }
};


const createItem = async (req, res) => {
    try{
        const { title, description, datePremiere, category_name } = req.body;
        const movies = await moviesModels.create({ title, description, datePremiere, category_name });
        res.json(movies);
    }catch(error){
        console.error(`❌ Error al obtener movies: ${error}`);
        res.status(500).json({ error: "Error al obtener movies", details: error.message });
    }
};



module.exports = {
    getItems, createItem }
