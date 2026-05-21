const express = require('express');

const router = express.Router();

const postsController = require('../controllers/postsController');

// GET all posts
router.get('/', postsController.getAllPosts);

// GET posts by author
router.get(
  '/author/:authorId',
  postsController.getPostsByAuthor
);

// GET post by id
router.get('/:id', postsController.getPostById);

// CREATE post
router.post('/', postsController.createPost);

// UPDATE post
router.put('/:id', postsController.updatePost);

// DELETE post
router.delete('/:id', postsController.deletePost);

module.exports = router;