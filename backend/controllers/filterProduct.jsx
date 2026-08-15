const Product = require("../models/productModel")

exports.filterProduct = async (req, res) => {
    try {
        const categoryList = req?.body?.category || []

        const product = await Product.find({
            category:
            {

                "$in": categoryList

            }

        })

        res.json({
            data: product,
            message: "product ",
            success: true
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong while filter"
        })


    }
}