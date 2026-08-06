const Product = require("../models/productModel")

exports.getProduct = async (req, res) => {
    try {
        const allProduct = await Product.find().sort({ createdAt: -1 })

        res.json({
            success: true,
            message: "showing all products ",
            data: allProduct
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in showing uploaded product"
        })


    }

}