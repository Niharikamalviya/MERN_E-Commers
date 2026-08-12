const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        required: true,
        timestamp: true
    },
    userId: {
        type: String,
        required: true,
    },

})

const cartproduct = mongoose.model("Cart", cartSchema)

module.exports = cartproduct