const keys = require('../keys.js');
const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(keys.mailchimpDev);

 module.exports = {
    newSubscriber: function (req, res) {
        mailchimp.request({
            method : 'post',
            path : `/lists/${keys.mailchimpDevList}/members`,
            body : req.body
          })
          .then((req,res)=> {console.log(res)})
          .catch(err => console.log(err))
    },
};

