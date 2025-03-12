const express = require('express');
const router = express.Router();

const { validatorCreateUser, validatorGetUser, validatorLogin, validatorUpdateUser, validatorPatch } = require('../validators/usersValidators');
const { getItems, createItem } = require('../controllers/categories');

router.get("/", getItems);

router.post("/", createItem);

module.exports = router;