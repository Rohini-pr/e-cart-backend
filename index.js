// Loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./db/connection')
const router = require('./routes/router')

// create expres server
const server = express()

// use packages to server
server.use(cors())
server.use(express.json())
server.use(router)

// create port where server should listen
const PORT = process.env.PORT || 3000

// run server
server.listen(PORT,()=>{
    console.log(`E Cart Server Started at port : ${PORT}`);
})

// resolve get rec to localhost:3000
server.get('/',(req,res)=>{
    res.status(200).json("E Cart Server Started !!!")
})