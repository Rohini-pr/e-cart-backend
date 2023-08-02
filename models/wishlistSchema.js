// import mongoose 
const mongoose = require("mongoose");

// define schemas to store data in a collection/model
const wishlistSchema = mongoose.Schema({
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
});

// create a model for collection
const wishlists = mongoose.model("wishlists",wishlistSchema)

// export model
module.exports = wishlists
