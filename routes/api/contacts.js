const router = require('express').Router()
const nodemailer = require('nodemailer')
const keys = require('../../keys.js');

// /api/contacts/
router.route('/')
  .post(function(req, res) {
    console.log("email route hit");
    console.log(req.body);
    let transporter = nodemailer.createTransport({
        host:'smtp.gmail.com',
        secure:true,
            auth:{
                user: keys.username,
                pass: keys.password
            },
        })
    let mailOptions = {      
        from: req.body.name,
        to: keys.username,
        subject: 'Arcane and Iron User Comment',
        text: req.body.content
    }
    transporter.sendMail(mailOptions, function (err,res) {
        if(err) {
            console.log('Error');
            console.log(err)
        } else {
            console.log('Email Sent');
        }
    })
})