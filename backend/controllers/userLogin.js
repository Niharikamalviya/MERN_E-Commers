const bcrypt = require("bcrypt")
const User = require("../models/user")
const jwt = require("jsonwebtoken");

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

        const checkPassword = await bcrypt.compare(password, user.password)


        if (checkPassword) {
            const tokenData = {
                id: user._id,
                email: user.email,

            }


            const token = jwt.sign(tokenData, process.env.SECRET_KEY,
                { expiresIn: 60 * 60 }
            );


            const tokenOption = {
                httpOnly: true,
                secure: true
            }
            return res.cookie("token", token, tokenOption).json({
                message: "login successfully",
                token: token,
                success: true,



            })

        }




    }
    catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "something went wrong in login"
        })


    }

}