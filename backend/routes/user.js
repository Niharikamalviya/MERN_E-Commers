const express = require('express')
const router = express.Router()

const { userSignUp } = require("../controllers/userSignUp")
const { userLogin } = require("../controllers/userLogin")
const { userDetails } = require("../controllers/userDetails")
const { authToken } = require("../middleware/authToken")
const { userLogout } = require("../controllers/userLogout")
const { allUser } = require("../controllers/allUser")
const { updateUser } = require("../controllers/updateUser")

//auth
router.post("/signup", userSignUp)
router.post("/login", userLogin)
router.get("/user-Details", authToken, userDetails)
router.get("/userLogout", userLogout)

//admin-panel

router.get("/all-user", authToken, allUser)
router.post("/update-user", authToken, updateUser)

module.exports = router;