// import products collection/model
const products = require('../models/productSchema')

// logic to get all products
exports.getallproducts = async (req,res)=>{
    try{
        const allproducts = await products.find()
        res.status(200).json(allproducts)
    }
    catch(error){
        res.status(401).json(error)
    }
} 

//logic viewproduct
exports.viewproduct = async(req,res)=>{
    // get product id from req
    let {id} = req.params
    try{
        // check id is available mongodb
        const product = await products.findOne({id})
        res.status(200).json(product)
    }
    catch(error){
        res.status(404).json("Product is not available")
    }
        
}