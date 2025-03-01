const express = require('express');
const productroute = require('../controllers/productcontrol')

const router = express.Router()
router.get('/product',productroute.controlgetallproduct)

module.exports = {router};