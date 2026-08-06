const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },
    brandName: {
        type: String,
        required: true,
        timestamp: true
    },
    category: {
        type: String,
        required: true,
    },
    productImage: [],

    price: {
        type: Number,
        required: true,
    },
    sellingPrice: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

const productModel = mongoose.model("Product", productSchema)

module.exports = productModel