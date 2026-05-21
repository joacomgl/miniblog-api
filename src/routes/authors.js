const express = require('express');

const router = express.Router();

const authorsController = require('../controllers/authorsController');

// GET all authors
router.get('/', authorsController.getAllAuthors);

// GET author by id
router.get('/:id', authorsController.getAuthorById);

// CREATE author
router.post('/', authorsController.createAuthor);

// UPDATE author
router.put('/:id', authorsController.updateAuthor);

// DELETE author
router.delete('/:id', authorsController.deleteAuthor);

module.exports = router;