const express = require('express');
const newsController = require('../controllers/newsController');

const {  
    getArticles,
    createArticle,
    getArticle,
    deleteArticle
} = require('../controllers/newsController');

const router = express.Router();

router.get('/', getArticles);

router.post('/create', createArticle);

router.get('/:id', getArticle);

router.delete('/:id', deleteArticle);

// router.patch('/users/:id', updateUser);

module.exports = router;