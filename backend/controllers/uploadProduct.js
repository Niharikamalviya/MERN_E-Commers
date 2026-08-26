const Product = require("../models/productModel")
const { uploadProductPermission } = require("../helper/permission")

exports.uploadProduct = async (req, res) => {
    try {

        const sessionUserId = req.userId
        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied")

        }


        const uploadProduct = new Product(req.body)
        const saveProduct = await uploadProduct.save()

        return res.status(200).json({
            success: true,
            message: "product upload successfully",
            data: saveProduct
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in upload product",
            error: error.message
        })


    }
}