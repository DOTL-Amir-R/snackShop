const express = require('express')
const cors = require("cors");
const appRootPath = require("app-root-path")
const mongoose = require('mongoose');

app = express()

require('dotenv').config({
    path: appRootPath + "/.env"
})

app.use(cors())
app.use(express.json({extended: true}))


mongoose.connect('mongodb://127.0.0.1:27017/snackShop').then((res)=>{
    console.log("DB conected Ok!")
})

app.use('/api',require('./routes').loginRoute)
app.use('/api',require('./routes').signInRoute)

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log(`server is run at port ${PORT}`)})