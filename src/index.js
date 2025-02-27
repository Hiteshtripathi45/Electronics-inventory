const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('just a check')
})
app.listen(3000)