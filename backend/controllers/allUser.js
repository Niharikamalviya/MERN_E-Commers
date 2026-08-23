const User = require("../models/user")


exports.allUser = async (req, res) => {
    try {
        console.log("userId", req.userId)

        const allUser = await User.find()

        return res.status(200).json({
            success: true,
            data: allUser,
            message: "shwoing All user successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in All user"
        })


    }

}