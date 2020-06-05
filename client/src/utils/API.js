import axios from 'axios'

export default {
    // Email routing
    newEmail: function (Email) {
        return axios.post('/api/Emails', Email);
    }
}