const jwt = require("jsonwebtoken")

exports.authToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token || req.header

        if (!token) {
            return res.json({
                message: "User not login",
                success: false,
            })
        }

        jwt.verify(token, process.env.SECRET_KEY, function (err, decode) {

            console.log(err)
            console.log("decode", decode)

            if (err) {
                console.log("error auth", err)
            }

            req.userID = decode;
            next()

        })
    }


    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in authToken"
        })


    }
}