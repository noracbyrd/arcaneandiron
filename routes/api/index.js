const router = require('express').Router();
const emailRoutes = require('./emails.js');
const contactRoutes = require('./contacts.js')

router.use('/emails', emailRoutes);
// router.use('/contacts', contactRoutes);

module.exports = router;