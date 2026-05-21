const postsService = require('../services/postsService');

// GET /posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await postsService.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET /posts/:id
const getPostById = async (req, res) => {
  try {
    const post = await postsService.getPostById(
      req.params.id
    );

    if (!post) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET /posts/author/:authorId
const getPostsByAuthor = async (req, res) => {
  try {
    const posts =
      await postsService.getPostsByAuthor(
        req.params.authorId
      );

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST /posts
const createPost = async (req, res) => {
  try {
    const {
      author_id,
      title,
      content,
      published,
    } = req.body;

    if (!author_id || !title || !content) {
      return res.status(400).json({
        message:
          'author_id, title and content are required',
      });
    }

    const newPost = await postsService.createPost({
      author_id,
      title,
      content,
      published,
    });

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// PUT /posts/:id
const updatePost = async (req, res) => {
  try {
    const {
      author_id,
      title,
      content,
      published,
    } = req.body;

    if (!author_id || !title || !content) {
      return res.status(400).json({
        message:
          'author_id, title and content are required',
      });
    }

    const updatedPost =
      await postsService.updatePost(
        req.params.id,
        {
          author_id,
          title,
          content,
          published,
        }
      );

    if (!updatedPost) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE /posts/:id
const deletePost = async (req, res) => {
  try {
    const deletedPost =
      await postsService.deletePost(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({
        message: 'Post not found',
      });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost,
};