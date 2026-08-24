const User = require("../models/user")
const { uploadProductPermission } = require("../helper/permission")


exports.updateUser = async (req, res) => {
    try {

        const sessionUserId = req.userId
        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied");
        }
        const { userId, email, name, role } = req.body

        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role }),
        }

        console.log("userId:", userId)
        console.log("email:", email)
        console.log("name:", name)
        console.log("role:", role)
        console.log("payload:", payload)
        const user = await User.findById(sessionUserId)

        console.log(" user-role", user.role)

        const updateUser = await User.findByIdAndUpdate(
            userId,
            payload,
            { new: true }
        )
        console.log("updateuser", updateUser)

        if (!updateUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
                error: error.message
            });
        }

        return res.status(200).json({
            success: true,
            data: updateUser,
            message: "update user role successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in updatinng user",
            error: error.message
        })


    }

}