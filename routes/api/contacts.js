require('dotenv').config();
const router = require('express').Router()
const nodemailer = require('nodemailer')
const keys = require('../../keys.js')
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    keys.clientId,
    keys.clientSecret, 
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: keys.refresh
});
const accessToken = oauth2Client.getAccessToken()


// /api/contacts/
router.route('/')
    .post(function (req, res) {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: keys.username,
                clientId: keys.clientId,
                clientSecret: keys.clientSecret,
                refreshToken: keys.refresh,
                accessToken: accessToken
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

