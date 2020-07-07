const axios = require('axios')
const keys = require('../keys.js');
const Mailchimp = require('mailchimp-api-v3')
const mailchimp = new Mailchimp(keys.mailchimpDev);

 module.exports = {
    newSubscriber: function (req, res) {
        console.log('made it to hypothetical mailchimp controller')
        console.log(req.body)
        // const options = {
        //     url: `https://us10.api.mailchimp.com/3.0/lists/${keys.mailchimpDevList}`,
        //     method: 'POST',
        //     headers: {
        //         Authorization: `auth ${keys.mailchimpDev}`
        //     },
        //     body: req.body
        // }
        // console.log(options)
        // axios.post(`https://us10.api.mailchimp.com/3.0/lists/${keys.mailchimpDevList}/members`, req.body)
        // .then((req,res) => {return res})
        // .catch(err => console.log(err))
        mailchimp.request({
            method : 'post',
            path : `/lists/${keys.mailchimpDevList}/members`,
            
            body : req.body
          })
          .then((req,res)=> {console.log(res)})
          .catch(err => console.log(err))
    },
    
};

