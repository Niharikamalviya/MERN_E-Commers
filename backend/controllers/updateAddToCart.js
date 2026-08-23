
const Cart = require("../models/cartProduct")

exports.updateAddToCart = async (req, res) => {
    try {

        const currentUserId = req.userId
        const addToCartProductId = req?.body?._id

        const qty = req.body.quantity

        const updateProduct = await Cart.updateOne({ _id: addToCartProductId }, {
            ...  (qty && { quantity: qty })
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong updating add in cart"
        })


    }
}