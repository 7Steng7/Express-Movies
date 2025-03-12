const express = require('express');
const router = express.Router();
const { validatorCreateCategory } = require('../validators/categoriesValidators');
const { getItems, createItem } = require('../controllers/categories');

router.get("/", getItems);
router.post("/", validatorCreateCategory, createItem);

module.exports = router;