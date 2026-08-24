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
const { getCategoryProduct } = require("../controllers/getCategoryProduct")
const { getCategoryWiseProduct } = require("../controllers/getCategoryWiseProduct")
const { getProductDetails } = require("../controllers/getProductDetails")
const { addToCart } = require("../controllers/addToCart")
const { countAddToCart } = require("../controllers/countAddToCart")
const { addToCartView } = require("../controllers/addToCartView")
const { deleteCartProduct } = require("../controllers/deleteCartProduct")
const { searchBar } = require("../controllers/searchBar")
const { filterProduct } = require("../controllers/filterProduct")
const { updateAddToCart } = require("../controllers/updateAddToCart")


//auth
router.post("/auth/signup", userSignUp)
router.post("/auth/login", userLogin)
router.get("/auth/user-Details", authToken, userDetails)
router.get("/auth/userLogout", userLogout)


//admin-panel

router.get("/auth/all-user", authToken, allUser)
router.post("/auth/update-user", authToken, updateUser)

//product upload
router.post("/upload-product", authToken, uploadProduct)
router.get("/get-products", getProduct)
router.post("/update-product", updateProduct, authToken)
router.post("/get-categoryProduct", getCategoryProduct)
router.post("/get-categoryWise-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)
router.post("/search-product", searchBar)
router.post("/filter-product", filterProduct)

//user add to cart

router.post("/addtocart", authToken, addToCart)
router.get("/countAddToCart", authToken, countAddToCart)
router.get("/View-cart-product", addToCartView)
router.post("/update-Cart-product", authToken, updateAddToCart)
router.post("/delete-Cart-Product", authToken, deleteCartProduct)


module.exports = router;