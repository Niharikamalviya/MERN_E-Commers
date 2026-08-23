const User = require("../models/user")


exports.updateUser = async (req, res) => {
    try {

        const sessionUser = req.userId
        if (!uploadProductPermission(sessionUserId)) {
            throw new Error("Permission denied")

        }
        const { userId, email, name, role } = req.body

        const payload = {
            ...(email && { email: email }),
            ...(name && { name: name }),
            ...(role && { role: role }),
        }
        const user = await User.findById(sessionUser)

        cnosole.log(" user-role", user.role)

        const updateUser = await User.findByIdAndUpdate(userId.payload)



        return res.status(200).json({
            success: true,
            data: updateUser,
            message: "update user role successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in updatinng user"
        })


    }

}