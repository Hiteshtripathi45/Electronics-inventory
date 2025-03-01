const controlcategories = require('../models/quries')



async function controlgetallcategories(req,res){
    const categoriesn= await controlcategories.getallcategories()
    const categories = categoriesn.rows
    res.json(categories)
    
}

module.exports = {controlgetallcategories};