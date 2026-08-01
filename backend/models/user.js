const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        timestamp: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        timestamp: true

    },
    profile: {
        type: String,
    }
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel