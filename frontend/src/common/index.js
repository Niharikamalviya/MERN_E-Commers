
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
    }

}

export default summaryApi