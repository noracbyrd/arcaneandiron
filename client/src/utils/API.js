import axios from 'axios'

export default {
    // user routing
    newUser: function (user) {
        console.log(user)
        return axios.post('/api/users', user);
    }
}