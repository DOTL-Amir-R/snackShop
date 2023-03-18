const express = require('express')
const cors = require("cors");
const appRootPath = require("app-root-path")
const mongoose = require('mongoose');
const fileUpload = require("express-fileupload")
app = express()

require('dotenv').config({
    path: appRootPath + "/.env"
})

app.use(cors())
app.use("/static", express.static(appRootPath + "/public"))
app.use(express.json({extended: false}))
app.use(express.urlencoded({extended: true}))
app.use(fileUpload({
    createParentPath: true ,
    limits:{
        filesize : 2*1024*1024,
    }
}))

mongoose.connect('mongodb://127.0.0.1:27017/snackShop').then((res)=>{
    console.log("DB conected Ok!")
})

app.use('/api',require('./routes').loginRoute)
app.use('/api',require('./routes').signInRoute)
app.use('/api',require('./routes').createProductRoute)
app.use('/api',require('./routes').showProductRoute)
app.use('/api',require('./routes').createReviewRoute)
app.use('/api',require('./routes').showReviewRoute)
const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{console.log(`server is run at port ${PORT}`)})