const router = require('express').Router();
const emailsController = require('../../controllers/emailsController');

// /api/emails/
router.route('/')
  .get(emailsController.findAll)
  .post(emailsController.create)
  
// /api/emails/:id
// router.route('/:id')
//   .get(emailsController.findById)
  // .put(emailsController.update)
  // .delete(emailsController.remove);

module.exports = router;
