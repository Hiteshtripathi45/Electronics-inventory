const express = require('express')
const app = express()
const path = require('path')

app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));


app.use(express.json())
app.use(express.urlencoded({extended:true}))


const mainproduct = require('./routes/productroutes')
const maincategories = require('./routes/categoriesrouter')
const mainsuppliers = require('./routes/suppliersrouter')
app.use('/api',mainproduct.router)
app.use('/api',maincategories.router)
app.use('/api',mainsuppliers.router)







app.listen(3000)