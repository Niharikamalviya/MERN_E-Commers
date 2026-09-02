const User = require("../models/user")


exports.uploadProductPermission = async (userId) => {
    if (!userId) return false

    const user = await User.findById(userId)
    if (!user) return false

    if (user.role !== 'ADMIN') {
        return false
    }
    return true
}