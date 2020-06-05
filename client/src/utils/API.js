import axios from 'axios'

export default {
    // Email routing
    newEmail: function (email) {
        return axios.post('/api/emails', email);
    }
}