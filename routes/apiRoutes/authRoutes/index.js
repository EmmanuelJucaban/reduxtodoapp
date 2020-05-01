const router = require('express').Router();
const { signUp } = require('../../../controllers/authController');

router.post('/signUp', signUp);

module.exports = router;
