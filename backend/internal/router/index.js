const express = require('express');
const { PostsController } = require('../posts/PostsController');
const { UsersController } = require('../users/UsersController');

const router = express.Router();

router.get('/', UsersController.findUsers);
router.get('/:id', PostsController.findPostsById);

module.exports = router;
