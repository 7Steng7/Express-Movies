const express = require('express');
const router = express.Router();
const { validatorCreateUser, validatorGetUser } = require('../validators/usersValidators');
const { getItems, getItem, createItem } = require('../controllers/users');

router.get("/", getItems);
router.get("/:email", validatorGetUser, getItem);
router.post("/", validatorCreateUser, createItem);

module.exports = router;