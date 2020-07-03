const keys = require('../keys.js');
module.exports = {
    newSubscriber: function (req, res) {
        const options = {
            url: `https://us10.api.mailchimp.com/3.0/lists/${keys.mailchimpDevList}`,
            method: 'POST',
            headers: {
                Authorization: `auth ${keys.mailchimpDev}`
            },
            body: req.body
        }
    },
    
};
