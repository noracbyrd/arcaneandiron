require('dotenv').config();
const router = require('express').Router()
const nodemailer = require('nodemailer')
const keys = require('../../keys.js')
const oauth2 = require('oauth2');


// /api/contacts/
router.route('/')
    .post(function (req, res) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: keys.username,
                clientId: keys.clientId,
                clientSecret: keys.clientSecret,
                refreshToken: keys.refresh,
                accessToken: keys.accessToken
            },
            tls: {
                rejectUnauthorized: false
            }
        })

        let mailOptions = {
            from: req.body.email,
            to: 'Test <noracbdev@gmail.com>',
            subject: 'Arcane and Iron User Comment',
            text: req.body.content
        }
        transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
                console.log('Error');
                console.log(err)
            } else {
                console.log('Email Sent');
            }
        })
    })

module.exports = router;

