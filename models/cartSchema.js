// import mongoose 
const mongoose = require("mongoose");

// define schemas to store data in a collection/model
const cartSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    total:{
        type:Number,
        required:true,
    },
});

// create a model for collection
const carts = mongoose.model("carts",cartSchema)

// export model
module.exports = carts
