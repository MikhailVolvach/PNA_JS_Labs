const express = require('express');
const { PostsController } = require('./PostsController');

const router = express.Router();

router.get('/:id', PostsController.findPostsById);

module.exports = router;
