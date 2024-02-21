const express = require('express')
const mongoose = require('mongoose')
const app = express()

// routes
app.get('/', (req, res)=>{
    res.send("Hello Node API")
})

app.get('/', (req, res)=>{
    res.send("Hello Bolg")
})

mongoose.set("strictQuery", false)
mongoose.connect('')