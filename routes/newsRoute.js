const express = require('express');
const newsController = require('../controllers/newsController');

const {getArticles} = require('../controllers/newsController');

const router = express.Router();

router.get('/', getArticles);


module.exports = router;