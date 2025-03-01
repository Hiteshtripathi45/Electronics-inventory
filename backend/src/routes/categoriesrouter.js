const express = require('express');
const categoriesroute = require('../controllers/categoriescontrol')

const router = express.Router()
router.get('/categories',categoriesroute.controlgetallcategories)

module.exports = {router};