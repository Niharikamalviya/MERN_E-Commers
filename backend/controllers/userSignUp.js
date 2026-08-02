const User = require("../models/user")
const bcrypt = require('bcrypt')

exports.userSignUp = async (req, res) => {
    try {
        console.log("req.body:", req.body);
        const { email, password, name, confirmPassword } = req.body;

        // check user may not be already exist if yes then 
        const user = await User.findOne({ email })
        console.log("user", user)
        if (user) {
            return res.status(400).json({
                success: false,
                messsage: "user is already exist",
            })
        }

        if (!email || !password || !name || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "fields are require",
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password, salt);

        if (!hashPassword) {
            throw new Error("somthing is wrong")
        }

        const payload = {
            ...req.body,
            role: "general",
            password: hashPassword
        }

        const userData = new User(payload)
        const saveUser = await userData.save()

        res.status(200).json({
            data: saveUser,
            success: true,
            message: "user create successfully",

        })

    }
    catch (error) {
        console.log(error)
        return res.status(500).json({

            success: false,
            error: error.message,
            message: "something went wrong in signup"
        })

    }
}