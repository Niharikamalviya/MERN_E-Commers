
const Product = require("../../models/productModel")

exports.getCategoryProduct = async (req, res) => {
    try {
        const productCategory = await Product.distinct("category")

        console.log("category", productCategory)

        const productByCategory = []

        for (const category of productCategory) {
            const product = await Product.findOne({ category })

            if (product) {
                productByCategory.push(product)
            }
        }

        res.json({
            success: true,
            message: "product category",
            data: productByCategory
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in showing uploaded product"
        })


    }
}