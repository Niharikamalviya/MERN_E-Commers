const { uploadProductPermission } = require("../helper/permission")
const Product = require("../models/productModel")

exports.updateProduct = async (req, res) => {

    try {

        if (!uploadProductPermission(req.userId)) {
            throw new Error("Permission denied")

        }

        const { _id, ...resBody } = req.body

        const updateProduct = await Product.findOneAndUpdate(_id, resBody, { new: true })
        console.log(" update Product", updateProduct)

        if (!updateProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found"

            })
        }

        res.json({
            success: true,
            data: updateProduct,
            message: "update product successfully"
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in update product",
            error: error.message
        })


    }

}