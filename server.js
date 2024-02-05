require("dotenv").config()
const express = require("express")
const expresslayout = require('express-ejs-layouts')
const app = express()
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout',"layouts/layout")
const indexRouters = require('./routes/index')
app.use(express.static('public'))
app.use(expresslayout)
const mongoose = require('mongoose')

app.use('/', indexRouters)



async function start (){
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log('connected')
        app.listen(process.env.port || 5000  ,()=>{
            console.log("listening on 5000")
        })
    }catch(err){
        console.log(err)
    }
}


start()

