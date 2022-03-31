const router = require('express').Router();
const AuthCtrl = require('./../controllers/auth.controller');


router.post('/signup', AuthCtrl.signup);
router.post('/signin', AuthCtrl.signin);

module.exports = router;