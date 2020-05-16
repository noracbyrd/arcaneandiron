import axios from 'axios'

export default {
    // user routing
    newUser: function (user) {
        console.log(user)
        console.log('api is hit wahoowah')
        return axios.post('/api/users', user);
    }
}