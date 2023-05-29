const express = require('express');
const { UsersController } = require('./UsersController');

const router = express.Router();

router.get('/', UsersController.findUsers);

module.exports = router;
