const Product = require("../models/productModel")

exports.getCategoryWiseProduct = async (req, res) => {
    try {

        const { category } = req?.body
        const product = await Product.find({ category })

        res.json({
            success: true,
            message: "product categorywise",
            data: product,
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in showing product",
            error: error.message
        })


    }
}