const userSignUp = (req, res) => {
    try {
        const { email, password, name } = req.body

        if (!email || !password || !name) {
            return res.status(400).json({
                success: false,
                message: "fields are require",
            })
        }
    }
    catch (error) {

    }
}