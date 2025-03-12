const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middleware/session');
const { validatorCreateUser, validatorGetUser, validatorLogin, validatorUpdateUser, validatorPatch } = require('../validators/usersValidators');
const { getItems } = require('../controllers/usuario');

router.get("/", getItems);



module.exports = router;