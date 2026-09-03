
const BASE_URL = "http://localhost:4000/api/v1"
const summaryApi = {
    signUp: {
        url: `${BASE_URL}/auth/signup`,
        method: "post"
    },
    login: {
        url: `${BASE_URL}/auth/login`,
        method: "post"
    },
    current_user: {
        url: `${BASE_URL}/auth/user-Details`,
        method: "get"
    },
    logout_user: {
        url: `${BASE_URL}/auth/userLogout`,
        method: "get"
    },
    allUser: {
        url: `${BASE_URL}/auth/all-user`,
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
        url: `${BASE_URL}/update-product/:id`,
        method: "post"
    },
    categoryProduct: {
        url: `${BASE_URL}/get-category-product`,
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
    },
    searchBar: {
        url: `${BASE_URL}/search-product`,
        method: "post"
    },
    filterProduct: {
        url: `${BASE_URL}/filter-product`,
        method: "post"

    }


}

export default summaryApi