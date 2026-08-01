const bcrypt = require("bcrypt")
const User = require("../models/user")
const JWT = require("jsonwebtoken")

exports.userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;


        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "fields are require",
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error("user not found")
        }

        const checkPassword = bcrypt.compare(password, user.password)
        console.log("checkPassword", checkpassword)

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,

            }
            const token = await jwt.login(tokenData, process.env.SECRET_KEY,
                { expiresIn: 60 * 60 }
            );

            const tokenOption = {
                httpOnly: true,
                secure: true
            }
            res.cookie("token", token).json({
                message: "login successfully",
                data: token,
                success: true,


            })

        }
        else {
            throw new Error("pleas check the passwords")
        }



    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: "something went wrong in login"
        })


    }

}