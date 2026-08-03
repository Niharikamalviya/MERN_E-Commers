
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
        url: `${BASE_URL}/api/user-Details`,
        method: "get"
    },
    logout_user: {
        url: `${BASE_URL}/api/userLogout`,
        method: "get"
    }
}

export default summaryApi