const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middleware/session');
const { validatorCreateUser, validatorGetUser, validatorLogin, validatorUpdateUser, validatorPatch } = require('../validators/usersValidators');
const { getItems, createItem } = require('../controllers/users');

router.get("/", getItems);

router.post("/", createItem);



module.exports = router;