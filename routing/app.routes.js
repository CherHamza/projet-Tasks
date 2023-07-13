const router = require('express').Router();
const {
  homeCtrl,
  tasksListCtrl,
  userSelectCtrl,
  userIdCtrl,
  newTaskCtrl,
  catListCtrl,
  newGetTaskCtrl

} = require('../controllers/app.ctrl');

router.get('/home', homeCtrl);
router.get('/tasksList', tasksListCtrl);
router.get('/usersList', userSelectCtrl);
router.get('/userSelect/:id', userIdCtrl);
router.get('/newtask', newTaskCtrl);
router.post('/newtask', newGetTaskCtrl);
router.get('/newtask/cat', catListCtrl);


module.exports = router;
