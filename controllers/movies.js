const { moviesModels, usersModels, seenModels } = require('../models');
const Category = require('../models/category');
const { Op } = require('sequelize');

const getItems = async (req, res) => {
    try {
        const { title, category, page = 1, pageSize = 10 } = req.query;
        const filteredMovies = {
            include: [
                {
                    model: Category,
                    as: 'category',
                    foreignKey: 'category_name',
                    targetKey: 'nameCategory',
                    attributes: ['nameCategory', 'description']
                }
            ],
            where: {},
            order: [['datePremiere', 'DESC']],
            limit: Number(pageSize),
            offset: (Number(page) - 1) * Number(pageSize)
        };

        if (title) { // Aplicar filtro por título (si se proporciona)
            filteredMovies.where.title = { [Op.like]: `%${title}%` };  // Búsqueda parcial (case-insensitive)
        }

        if (category) {
            filteredMovies.where.category_name = category;  // Filtro exacto por nombre de categoría
        }

        const movies = await moviesModels.findAll(filteredMovies);
        const totalMovies = await moviesModels.count({ where: filteredMovies.where }); //pagination total

        res.json({
            data: movies,
            pagination: {
                page: Number(page),
                pageSize: Number(pageSize),
                total: totalMovies,
                totalPages: Math.ceil(totalMovies / pageSize)
            }
        });
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

const getNews = async (req, res) => {
    try{
        const currentDate = new Date();
        const threeWeeksAgo = new Date(currentDate);
        threeWeeksAgo.setDate(currentDate.getDate() - 21); // Restar 21 días
        // console.log("Fecha actual:", currentDate);
        // console.log("Hace 3 semanas:", threeWeeksAgo);
        const movies = await moviesModels.findAll({
            where: {
                datePremiere: {
                    [Op.between]: [threeWeeksAgo, currentDate] // Entre hace 21 días y hoy
                }
            },
            include: [
                {
                    model: Category,
                    as: 'category',
                    attributes: ['nameCategory', 'description']
                }
            ],
            order: [['datePremiere', 'DESC']]
        });

        res.json(movies);
    }catch(error){
        console.error(`❌ Error al obtener movies: ${error}`);
        res.status(500).json({ error: "Error al obtener movies", details: error.message });
    }
};

const markMovieAsSeen = async (req, res) => {
    try {
        const { email, title } = req.body;
        const user = await usersModels.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        const movie = await moviesModels.findOne({ where: { title } });
        if (!movie) {
            return res.status(404).json({ error: "Película no encontrada" });
        }

        const existingRecord = await seenModels.findOne({ // Verificar si la película ya fue marcada como vista por el usuario
            where: { idUser: email, idMovie: title }
        });
        if (existingRecord) {
            return res.status(400).json({ error: "La película ya fue marcada como vista por este usuario" });
        }

        await seenModels.create({ idUser: email, idMovie: title });

        res.status(201).json({ message: "Película marcada como vista correctamente" });
    } catch (error) {
        console.error(`❌ Error al marcar la película como vista: ${error}`);
        res.status(500).json({ error: "Error al marcar la película como vista", details: error.message });
    }
};



module.exports = {
    getItems, createItem, getNews, markMovieAsSeen }
