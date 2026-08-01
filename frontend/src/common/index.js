
const backendDomain = "http://localhost:5173"
const summaryApi = {
    signUp: {
        url: `${backendDomain}/api/signup`,
        method: "post"
    },
    login: {
        url: `${backendDomain}/api/login`,
        method: "post"
    },
    current_user: {
        url: `${backendDomain}/api/user-Details`,
        method: "get"
    },
    logout_user: {
        url: `${backendDomain}/api/userLogout`,
        method: "get"
    }
}

export default summaryApi