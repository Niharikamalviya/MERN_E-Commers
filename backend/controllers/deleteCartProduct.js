
const Cart = require("../models/cartProduct")

exports.deleteCartProduct = async (req, res) => {
    try {
        const currentUserId = req.userId
        const addToCartProductId = req.body._id

        const deleteProduct = await Cart.deleteOne({ _id: addToCartProductId })


        return res.status(200).json({
            success: true,
            message: "delete successfully",
            data: deleteProduct
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong while deleting cart product"
        })


    }

}