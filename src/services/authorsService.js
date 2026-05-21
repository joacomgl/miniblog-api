const db = require('../db');

// Obtener todos los autores
const getAllAuthors = async () => {
  const result = await db.query(
    'SELECT * FROM authors ORDER BY id ASC'
  );

  return result.rows;
};

// Obtener autor por ID
const getAuthorById = async (id) => {
  const result = await db.query(
    'SELECT * FROM authors WHERE id = $1',
    [id]
  );

  return result.rows[0];
};

// Crear autor
const createAuthor = async ({ name, email, bio }) => {
  const result = await db.query(
    `
    INSERT INTO authors (name, email, bio)
    VALUES ($1, $2, $3)
    RETURNING *
    `,
    [name, email, bio]
  );

  return result.rows[0];
};

// Actualizar autor
const updateAuthor = async (id, { name, email, bio }) => {
  const result = await db.query(
    `
    UPDATE authors
    SET name = $1,
        email = $2,
        bio = $3
    WHERE id = $4
    RETURNING *
    `,
    [name, email, bio, id]
  );

  return result.rows[0];
};

// Eliminar autor
const deleteAuthor = async (id) => {
  const result = await db.query(
    'DELETE FROM authors WHERE id = $1 RETURNING *',
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};