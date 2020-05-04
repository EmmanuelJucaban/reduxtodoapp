const router = require('express').Router();
const passport = require('passport');
const passportService = require('../../../services/passport');
const { signUp } = require('../../../controllers/authController');

router.post('/signUp', signUp);

module.exports = router;
