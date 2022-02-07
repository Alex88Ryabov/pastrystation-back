const express = require('express');
const passport = require('passport');
const controller = require('../controllers/about-us');
const router = express.Router();

router.get('/', controller.get);
router.patch('/:id', passport.authenticate('jwt', {session: false}), controller.update);

module.exports = router;