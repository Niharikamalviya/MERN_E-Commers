const express = require('express')
const router = express.Router()

const { userSignUp } = require("../controllers/userSignUp")
const { userLogin } = require("../controllers/userLogin")
const { userDetails } = require("../controllers/userDetails")
const { authToken } = require("../middleware/authToken")
const { userLogout } = require("../controllers/userLogout")
const { allUser } = require("../controllers/allUser")
const { updateUser } = require("../controllers/updateUser")
const { uploadProduct } = require("../controllers/uploadProduct")
const { getProduct } = require("../controllers/getProduct")
const { updateProduct } = require("../controllers/updateProduct")
const { getCategoryPrduct } = require("../controllers/getCategoryPrduct")
const { getCategoryWiseProduct } = require("../controllers/getCategoryWiseProduct")
const { getProductDetails } = require("../controllers/getProductDetails")
const { addToCart } = require("../controllers/addToCart")
const { countAddToCart } = require("../controllers/countAddToCart")
const { addToCartView } = require("../controllers/addToCartView")
const { updateAddToCart } = require("../contollers/updateAddToCart")
const { deleteCartProduct } = require("../controllers/deleteCartProduct")

//auth
router.post("/signup", userSignUp)
router.post("/login", userLogin)
router.get("/user-Details", authToken, userDetails)
router.get("/userLogout", userLogout)


//admin-panel

router.get("/all-user", authToken, allUser)
router.post("/update-user", authToken, updateUser)

//product upload
router.post("/upload-product", authToken, uploadProduct)
router.get("/get-products", getProduct)
router.post("/update-product", updateProduct, authToken)
router.post("/get-categoryProduct", getCategoryPrduct)
router.post("/get-categoryWise-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)


//user add to cart

router.post("/addtocart", authToken, addToCart)
router.get("/countAddToCart", authToken, countAddToCart)
router.get("/View-cart-product", addToCartView)
router.post("/update-Cart-product", authToken, updateAddToCart)
router.post("/delete-Cart-Product", authToken, deleteCartProduct)

module.exports = router;