const controlsuppliers = require('../models/quries')

async function controlgetallsuppliers(req,res){
    const suppliersn= await controlsuppliers.getallsuppliers()
    const suppliers = suppliersn.rows
    res.json(suppliers)
    
}


module.exports = {controlgetallsuppliers };