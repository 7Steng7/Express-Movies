const { body } = require('express-validator');

const validatorCreateCategory = [
    body('nameCategory')
        .notEmpty().withMessage('El nombre de la categiria es obligatorio')
        .isString().withMessage('El nombre debe ser un texto'),
    body('description')
        .notEmpty().withMessage('La descripción es obligatoria')
        .isString().withMessage('La descripción debe ser un texto'),
];
module.exports = { validatorCreateCategory };