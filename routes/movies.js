const express = require('express');
const router = express.Router();
const { validatorGetNews,validatorMarkMovieAsSeen, validatorCreateItem } = require('../validators/moviesValidators');
const { getItems, createItem, getNews, markMovieAsSeen } = require('../controllers/movies');

router.get("/", getItems);
router.get("/news", validatorGetNews, getNews);
router.post('/mark-as-seen', validatorMarkMovieAsSeen, markMovieAsSeen);
router.post("/", validatorCreateItem, createItem);

module.exports = router;