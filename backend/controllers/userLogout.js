

exports.userLogout = async (req, res) => {
    try {
        res.clearCookie("token")

        res.json({
            data: [],
            message: "user logged out",
            success: true,
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in logout"
        })


    }


}