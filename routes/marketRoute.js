const express = require('express');
const { getMarket } = require('../controllers/marketController');
const marketController = require('../controllers/marketController');

const {getmarket} = require('../controllers/marketController');

const router = express.Router();

router.get('/', getMarket);


module.exports = router;