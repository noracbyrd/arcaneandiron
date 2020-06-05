const router = require('express').Router();
const emailRoutes = require('./emails.js');

router.use('/emails', emailRoutes);

module.exports = router;