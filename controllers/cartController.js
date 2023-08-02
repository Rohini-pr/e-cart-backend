// import model carts
const carts = require('../models/cartSchema')

// logic to add item to cart
exports.addcartItem = async(req,res)=>{
    //get product details from req to add
    const {id,title,price,image,quantity} = req.body
    try {
        //check product is in carts model
        const product = await carts.findOne({id})
        if (product) {
            // if yes then increment quantity send all cart products
            product.quantity+=1
            product.total=product.quantity*product.price
            await product.save()
            res.status(200).json("Products added successfully!!!") 
        } 
        else {
            // if no then add product to model
            const newProduct = new carts({
                id,title,price,image,quantity,total:price
            })
            // save mongodb 
            await newProduct.save()
            res.status(200).json("Product added successfully!!!")    
        } 
    } 
    catch (error) {
        res.status(401).json(error)
    }
}

// logic to get cart
exports.getcart = async(req,res)=>{
    try {
        const allItems = await carts.find()
        res.status(200).json(allItems)
    } 
    catch (error) {
        res.status(401).json(error)
    }
}

// logic to remove an item from cart
exports.removecartItem = async (req,res)=>{
    // get product id from req
    const {id}= req.params
    try {
        await carts.deleteOne({id})
        const allItems = await carts.find()
        res.status(200).json(allItems)
    } 
    catch (error) {
        res.status(401).json(error)
    }
}

// logic to increment cart item
exports.inCartItem = async (req,res)=>{
    // get id from req
    const {id} = req.params
    try {
        // check id is in carts model
        const item = await carts.findOne({id})
        if(item){
            // if yes then increment count, update total, send all items of cart as res
        item.quantity+=1
        item.total = item.quantity*item.price
        // to save changes in collection
        await  item.save()
        const allItems = await carts.find()
        res.status(200).json(allItems)
        }
        else{
            res.status(404).json("Item not fount!!!")
        }
        
    } 
    catch (error) {
        res.status(401).json(error)
    }
    

}

// logic to decrement cart item
exports.decCartItem = async (req,res)=>{
    // get id from req
    const {id} = req.params
    try {
        // check id is in carts model
        const item = await carts.findOne({id})
        if(item){
            // if yes then decrement count
            item.quantity-=1
            if(item.quantity==0){
                await carts.deleteOne({id})
                const allItems = await carts.find()
                res.status(200).json(allItems)
            }
            else{
                //update total, send all items of cart as res
                item.total = item.quantity*item.price
                // to save changes in collection
                await  item.save()
                const allItems = await carts.find()
                res.status(200).json(allItems)
            }
        }
        else{
            res.status(404).json("Item not fount!!!")
        }
        
    } 
    catch (error) {
        res.status(401).json(error)
    }
}

// logic for empty cart
exports.emptyCart =  async (req,res)=>{
    try {
        await carts.deleteMany({})
        const allItems = await carts.find()
        res.status(200).json(allItems)
    } 
    catch (error) {
        res.status(401).json(error)
    }
}