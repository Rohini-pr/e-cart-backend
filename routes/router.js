//import express
const express = require('express')

// import product controller
const productController = require('../controllers/productController')
const wishlistController = require('../controllers/wishlistController')
const cartController = require('../controllers/cartController')
// to create route using express
const router = new express.Router()

// route for getallproducts
router.get('/products/get-all-products',productController.getallproducts)

// route for viewproduct
router.get('/products/view/:id',productController.viewproduct)

// route for add to wishlist
router.post('/wishlist/add-product',wishlistController.addtowishlist)

//  route for get wishlist
router.get('/wishlist/all-products', wishlistController.getallproducts)

//  route for removing an item from wishlist
router.delete('/wishlist/remove-item/:id', wishlistController.removeItem)

//  route for add cart item
router.post('/cart/add-product',cartController.addcartItem)

//  route for get cart
router.get('/cart/all-products',cartController.getcart)

// route for removeItem from cart
router.delete('/cart/remove-item/:id',cartController.removecartItem)

// route for incrementing cart item
router.get('/cart/increment-item/:id',cartController.inCartItem)

// route for decrementing cart item
router.get('/cart/decrement-item/:id',cartController.decCartItem)

// route for empty cart
router.delete('/cart/empty',cartController.emptyCart)

// export router
module.exports = router