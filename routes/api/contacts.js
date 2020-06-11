const router = require('express').Router()
const nodemailer = require('nodemailer')

// /api/contacts/
router.route('/')
  .post(function(req, res) {
    console.log("email route hit");
    console.log(req.body);
    // let transporter = nodemailer.createTransport({
    //     host:'smtp.gmail.com',
    //     port:465,
    //     secure:true,
    //         auth:{
    //             type:'OAuth2',
    //             user:process.env.User,
    //             clientId: process.env.clientId,
    //             clientSecret: process.env.clientSecret,
    //             refreshToken: process.env.refreshToken,
    //             accessToken: process.env.accessToken
    //         },
    //         tls:{
    //             rejectUnauthorized: false
    //         }
    //     })
    // var mailOptions = {
    //     // from: 'Eve <4allabouteve@gmail.com>',
    //     from: req.body.email,
    //     to:'Eve <4allabouteve@gmail.com>',
    //     subject:"All About Eve User Comment",
    //     // text: 'Hello World!!'
    //     text:"Request from: " + req.body.name + " //Company Name: " + req.body.company +  " //User Email: " + req.body.email + "  //message: " + req.body.message
    // }
    // transporter.sendMail(mailOptions, function (err,res) {
    //     if(err) {
    //         console.log('Error');
    //         console.log(err)
    //     } else {
    //         console.log('Email Sent');
    //     }
    // })
})