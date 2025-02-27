const pool = require('./db')

async function getallproducts() {
    const products = await pool.query('SELECT * FROM products')
    return products 
    
}




async function getallcategories() {
    const categories = await pool.query('SELECT * FROM categories')
    return categories 
    
}

async function getallsuppliers() {
    const suppliers = await pool.query('SELECT * FROM suppliers')
    return suppliers 
    
}

module.exports={getallproducts,getallcategories,getallsuppliers};