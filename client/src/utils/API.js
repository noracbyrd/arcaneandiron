import axios from 'axios'

export default {
    // Email routing
    newEmail: function (email) {
        console.log('api file hit')
        return axios.post('/api/emails', email);
    }
}