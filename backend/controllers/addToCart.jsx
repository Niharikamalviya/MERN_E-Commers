const Cart = require("../models/cartProduct")

exports.addToCart = async (req, res) => {
    try {
        const { productId } = req?.body
        const currentUser = req.userId

        const isProductAvailable = await Cart.findOne({ productId })

        if (isProductAvailable) {
            return res.json({
                message: "Already exist",
                success: false
            })
        }

        const payload = {
            productId: productId,
            quantity: 1,
            userId: currentUser,
        }

        const newAddToCart = new Cart.find(payload)
        const saveProduct = await newAddToCart.save()

        res.status(200).json({
            success: true,
            message: " Prooduct add successfully in cart"
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong adding in cart"
        })


    }
}