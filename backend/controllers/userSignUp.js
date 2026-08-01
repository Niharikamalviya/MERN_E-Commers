const User = require("../models/user")
const bcrypt = require('bcrypt')

exports.userSignUp = async (req, res) => {
    try {
        const { email, password, name } = req.body

        if (!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: "fields are require",
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync("password", salt);

        if (!hashPassword) {
            throw new Error("somthing is wrong")
        }

        const payload = {
            ...req.body,
            password: hashPassword
        }

        const user = new User(req.body)
        const saveUser = user.save()

        res.status(200).json({
            data: saveUser,
            success: true,
            message: "user create successfully",

        })

    }
    catch (error) {

    }
}