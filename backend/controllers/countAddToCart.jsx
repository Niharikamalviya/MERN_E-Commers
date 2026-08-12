

exports.countAddToCart = async (req, res) => {

    try {
        const userId = req.userId

        const count = await Cart.countDocuments({
            userId: userId

        })

        res.json({
            data: {
                count: count
            },
            message: "add to cart successfully",
            success: true
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in countign add to cart"
        })


    }
}