const router = require('express').Router();
const {
  homeCtrl,
  servicesCtrl,
  contactCtrl,
} = require('../controllers/app.ctrl');

router.get('/home', homeCtrl);


module.exports = router;
