const router = require('express').Router();
const mailchimpController = require('../../controllers/mailchimpController');

// /api/mailchimp/
router.route('/')
  .post(mailchimpController.newSubscriber)

module.exports = router;
