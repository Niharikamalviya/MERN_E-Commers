const express = require('express')
const router = express.Router()

const { userSignUp } = require("../controllers/userSignUp")
const { userLogin } = require("../controllers/userLogin")
const { userDetails } = require("../controllers/userDetails")
const { authToken } = require("../controllers/authToken")

router.post("/signup", userSignUp)
router.post("/login", userLogin)
router.get("/user-Details", authToken, userDetails)

module.exports = router;