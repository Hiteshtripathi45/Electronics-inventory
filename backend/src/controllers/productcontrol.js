const controlproduct = require('../models/quries')

async function controlgetallproduct(req,res){
    const productn= await controlproduct.getallproducts()
    const product = productn.rows
    console.log('get this')
    res.json(product)
    
}


module.exports = {controlgetallproduct };