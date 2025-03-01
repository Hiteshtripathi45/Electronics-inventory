const express = require('express');
const suppliersroute = require('../controllers/supplierscontrol')

const router = express.Router()
router.get('/suppliers',suppliersroute.controlgetallsuppliers )

module.exports = {router};