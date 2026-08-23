const Product = require("../models/productModel")

exports.searchBar = async (req, res) => {
    try {
        const query = req.query.q

        const regex = new RegExp(query, 'i', 'g')

        const product = await Product.find({
            "$or": [
                {
                    productName: regex

                },
                {
                    category: regex
                }
            ]
        })

        return res.json({
            data: product,
            message: "search product list",
            success: true
        })

    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong adding in cart"
        })


    }

}