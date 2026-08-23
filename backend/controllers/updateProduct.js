

exports.updateProduct = async (req, res) => {

    try {

        if (!uploadProductPermission(req.userId)) {
            throw new Error("Permission denied")

        }

        const { _id, ...resBody } = req.body

        const updateProduct = await productModel.findByIdAndUpdate(_id, resBody)

        res.json({
            success: true,
            data: updateProduct,
            message: "update product successfully"
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in update product"
        })


    }

}