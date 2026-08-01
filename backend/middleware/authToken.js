const jwt = require("jsonwebtoken")

exports.authToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token

        console.log("token", token)
        if (!token) {
            return res.json({
                message: "User not login",
                success: false,
            })
        }

        jwt.verify(token, process.env.TOKEN_SECRET_KEY, function (err, decode) {
            console.log(err)
            console.log("decoded", decoded)

            if (err) {
                console.log("error auth", err)
            }

            req.user = decoded;
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