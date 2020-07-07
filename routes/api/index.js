const router = require('express').Router();
const emailRoutes = require('./emails.js');
const contactRoutes = require('./contacts.js')
const mailchimpRoutes = require('./mailchimp')

router.use('/emails', emailRoutes);
router.use('/contacts', contactRoutes);
router.use('/mailchimp', mailchimpRoutes);

module.exports = router; 