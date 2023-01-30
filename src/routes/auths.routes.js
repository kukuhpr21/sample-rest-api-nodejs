const express = require('express');
const router = express.Router();
const authController = require('../controllers/auths.controlller');

router.post('/login', authController.login);

module.exports = router;