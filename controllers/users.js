const { usersModels } = require('../models');
const Movie = require('../models/movie');

const getItems = async (req, res) => {
    try {
        const users = await usersModels.findAll();
        res.json(users);
    } catch (error) {
        console.error(`❌ Error al obtener users: ${error}`);
        res.status(500).json({ error: "Error al obtener users", details: error.message });
    }
};

const getItem = async (req, res) => {
    try {
        const { email } = req.params;

        const userExists = await usersModels.findOne({ where: { email } });
        if (!userExists) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        const user = await usersModels.findOne({
            where: { email },
            include: [
                {
                    model: Movie,
                    as: 'movies',
                    attributes: ['id', 'title', 'description'],
                    through: {
                        attributes: []
                    }
                }
            ]
        });

        if (!user || !user.movies || user.movies.length === 0) {
            return res.status(404).json({ message: "El usuario no ha visto ninguna película" });
        }
        res.json(user);
    } catch (error) {
        console.error(`❌ Error al obtener users: ${error}`);
        res.status(500).json({ error: "Error al obtener users", details: error.message });
    }
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

module.exports = { getItems, getItem, createItem }
