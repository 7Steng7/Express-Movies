const express = require('express');
const router = express.Router();
const { getItems, createItem, getNews, markMovieAsSeen } = require('../controllers/movies');

router.get("/", getItems);

router.get("/news", getNews);

router.post('/mark-as-seen', markMovieAsSeen);

router.post("/", createItem);


module.exports = router;