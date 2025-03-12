const express = require('express');
const router = express.Router();
const { getItems } = require('../controllers/seen');

router.get("/", getItems);

module.exports = router;