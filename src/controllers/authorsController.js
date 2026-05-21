const authorsService = require('../services/authorsService');

// GET /authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await authorsService.getAllAuthors();

    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET /authors/:id
const getAuthorById = async (req, res) => {
  try {
    const author = await authorsService.getAuthorById(req.params.id);

    if (!author) {
      return res.status(404).json({
        message: 'Author not found',
      });
    }

    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST /authors
const createAuthor = async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: 'Name and email are required',
      });
    }

    const newAuthor = await authorsService.createAuthor({
      name,
      email,
      bio,
    });

    res.status(201).json(newAuthor);

  } catch (error) {

    // Email duplicado
    if (error.code === '23505') {
      return res.status(400).json({
        message: 'Email already exists',
      });
    }

    res.status(500).json({
      message: error.message,
    });
  }
};

// PUT /authors/:id
const updateAuthor = async (req, res) => {
  try {
    const { name, email, bio } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: 'Name and email are required',
      });
    }

    const updatedAuthor = await authorsService.updateAuthor(
      req.params.id,
      {
        name,
        email,
        bio,
      }
    );

    if (!updatedAuthor) {
      return res.status(404).json({
        message: 'Author not found',
      });
    }

    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE /authors/:id
const deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await authorsService.deleteAuthor(
      req.params.id
    );

    if (!deletedAuthor) {
      return res.status(404).json({
        message: 'Author not found',
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
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};