const Cart = require("../models/cartProduct")


exports.addToCartView = async (req, res) => {
    try {
        const currentUser = req.userId

        const allProduct = await Cart.find({
            userId: currentUser
        }).populate("productId")

        return res.status(200).json({
            success: true,
            message: "cart display successfully "
        })



    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in showing cart product"
        })


    }

}