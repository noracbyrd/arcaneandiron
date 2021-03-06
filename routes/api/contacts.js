require('dotenv').config();
const router = require('express').Router()
const nodemailer = require('nodemailer')
const keys = require('../../keys.js')
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
    keys.clientId,
    keys.clientSecret, 
    'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: keys.refresh
});
const accessToken = oauth2Client.getAccessToken()


// /api/contacts/
router.route('/')
    .post(function (req, res) {
       let transporter = nodemailer.createTransport(
            {
            host:'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                type: 'OAuth2',
                user: keys.username,
                pass: keys.password,
                clientId: keys.clientId,
                clientSecret: keys.clientSecret,
                refreshToken: keys.refresh,
                accessToken: accessToken,
                expires: 1484314697598
            },
            tls:{
                rejectUnauthorized: false
            }
        })

        let mailOptions = {
            from: 'noracbdev@gmail.com',
            to: 'Test <noracbdev@gmail.com>',
            replyTo: 'noracbdev@gmail.com',
            subject: 'Arcane and Iron User Comment',
            text: `Email from ${req.body.name} at ${req.body.email}: ${req.body.content}`,
            html: `<p>From: ${req.body.name}</p><p>Email: ${req.body.email}</p><p>Message: ${req.body.content}</p>`,
            auth: {
                user: keys.username,
                refreshToken: keys.refresh,
                accessToken: accessToken,
                expires: 1484314697598
            }
        }
        transporter.sendMail(mailOptions, function (err, res) {
            if (err) {
                console.log('Error');
                console.log(err)
            } 
        })
    })

module.exports = router;

