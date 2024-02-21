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
mongoose.connect('mongodb://[<username>:<password>@]hostname0<:port>[,hostname1:<port1>][,hostname2:<port2>][...][,hostnameN:<portN>]')