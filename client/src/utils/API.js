import axios from 'axios'

export default {
    // Email routing
    newEmail: function (email) {
        return axios.post('/api/emails', email);
    },
    contact: function (contact) {
        return axios.post('/api/contacts', contact)
    }
}