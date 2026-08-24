
const User = require("../models/user")

exports.userDetails = async (req, res) => {
    try {

        console.log("userID", req.userID)
        const user = await User.findById(req.userID)

        res.status(200).json({
            data: user,
            success: true,
            message: "user details"

        })
        console.log("user", user)


    }


    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in userdetails",
            error: error.message
        })


    }
}