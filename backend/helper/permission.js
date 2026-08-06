const User = require("../models/userModel")


exports.uploadProductPermission = async (userId) => {
    const user = await User.findById(userId)

    if (user.role !== 'ADMIN') {
        return false
    }
    return true

}