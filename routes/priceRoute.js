const express = require('express');

const getPrice= require('../controllers/priceController');

const router = express.Router();

router.get('/', getPrice);



module.exports = router;