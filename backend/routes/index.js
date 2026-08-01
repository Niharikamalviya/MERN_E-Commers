const express = require('express')
const router = express.Router()

const { userSignUp } = require("../controllers/userSignUp")
const { userLogin } = require("../controllers/userLogin")
const { userDetails } = require("../controllers/userDetails")
const { authToken } = require("../middleware/authToken")
const { userLogout } = require("../controllers/userLogout")

router.post("/signup", userSignUp)
router.post("/login", userLogin)
router.get("/user-Details", authToken, userDetails)
roouter.get("/userLogout", userLogout)

module.exports = router;