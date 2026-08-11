const Product = require("../models/productModel")

exports.getProductDetails = async (req, res) => {

    try {
        const { productId } = req.body
        const product = await Product.findById(productId)

        return res.status(200).json({
            success: true,
            data: product,
            message: "showing product details"
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in showing  product details"
        })


    }
}