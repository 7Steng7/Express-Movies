const { query, body } = require('express-validator');

const validatorGetNews = [
    query('category')
        .optional()
        .isString().withMessage('La categoría debe ser un texto'),
    query('fromDate')
        .optional()
        .isISO8601().withMessage('La fecha debe tener el formato YYYY-MM-DD')
];

const validatorMarkMovieAsSeen = [
    body('email')
        .notEmpty().withMessage('El email es obligatorio')
        .isEmail().withMessage('El email debe ser válido'),
    body('title')
        .notEmpty().withMessage('El título de la película es obligatorio')
        .isString().withMessage('El título debe ser un texto')
];

const validatorCreateItem = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio')
        .isString().withMessage('El título debe ser un texto'),
    body('description')
        .optional()
        .isString().withMessage('La descripción debe ser un texto'),
    body('datePremiere')
        .optional()
        .isISO8601().withMessage('La fecha de estreno debe tener el formato YYYY-MM-DD'),
    body('category_name')
        .optional()
        .isString().withMessage('El nombre de la categoría debe ser un texto')
];
module.exports = { validatorGetNews, validatorMarkMovieAsSeen, validatorCreateItem };