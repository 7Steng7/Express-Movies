const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middleware/session');
const { validatorCreateUser, validatorGetUser, validatorLogin, validatorUpdateUser, validatorPatch } = require('../validators/usersValidators');
const { getItems, getItem, createItem } = require('../controllers/users');

router.get("/", getItems);

router.get("/:email", getItem);

router.post("/", createItem);

module.exports = router;