import axios from "axios"

export default {
    // user routing
    newUser: function (user) {
        return axios.post("/api/users", user)
    }
}