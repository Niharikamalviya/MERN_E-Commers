
const BASE_URL = "http://localhost:4000/api/v1/auth"
const summaryApi = {
    signUp: {
        url: `${BASE_URL}/signup`,
        method: "post"
    },
    login: {
        url: `${BASE_URL}/login`,
        method: "post"
    },
    current_user: {
        url: `${BASE_URL}/user-Details`,
        method: "get"
    },
    logout_user: {
        url: `${BASE_URL}/userLogout`,
        method: "get"
    },
    allUser: {
        url: `${BASE_URL}/all-user`,
        method: "get"
    },
    updateUser: {
        url: `${BASE_URL}/update-user`,
        method: "post"
    },
    uploadProduct: {
        url: `${BASE_URL}/upload-product`,
        method: "post"
    },
    allProduct: {
        url: `${BASE_URL}/get-products`,
        method: "get"
    },
    updateProduct: {
        url: `${BASE_URL} /update-product`,
        method: "post"
    },
    categoryProduct: {
        url: `${BASE_URL}/get-categoryProduct`,
        method: "get"
    },
    categoryWiseProduct: {
        url: `${BASE_URL}/get-categoryWise-product`,
        method: "post"
    },
    productDetails: {
        url: `${BASE_URL}/product-details`,
        method: "post"
    },
    addToCart: {
        url: `${BASE_URL}/addtocart`,
        method: "post"
    },
    countAddToCart: {
        url: `${BASE_URL}/countAddToCart`,
        method: "get"
    },
    addToCartView: {
        url: `${BASE_URL}/View-cart-product`,
        method: "get"
    },
    updateCartProduct: {
        url: `${BASE_URL}/update-Cart-product`,
        method: "post"
    },
    deleteCartproduct: {
        url: `${BASE_URL}/delete-Cart-Product`,
        method: "post"
    }


}

export default summaryApi