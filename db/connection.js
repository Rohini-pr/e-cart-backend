// import mongoose
const mongoose = require('mongoose')

// get connection string
const DB= process.env.DATABASE

// connect the mongodb atlas
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("Mongodb Atlas: Cart database Connected Successfully...");
}).catch((error)=>{
    console.log("Error:",error);
})