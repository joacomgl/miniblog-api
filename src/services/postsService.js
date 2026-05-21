const db = require('../db');

// Obtener todos los posts
const getAllPosts = async () => {
  const result = await db.query(
    `
    SELECT 
      posts.*,
      authors.name AS author_name,
      authors.email AS author_email
    FROM posts
    JOIN authors
      ON posts.author_id = authors.id
    ORDER BY posts.id ASC
    `
  );

  return result.rows;
};

// Obtener post por ID
const getPostById = async (id) => {
  const result = await db.query(
    `
    SELECT 
      posts.*,
      authors.name AS author_name,
      authors.email AS author_email
    FROM posts
    JOIN authors
      ON posts.author_id = authors.id
    WHERE posts.id = $1
    `,
    [id]
  );

  return result.rows[0];
};

// Obtener posts por autor
const getPostsByAuthor = async (authorId) => {
  const result = await db.query(
    `
    SELECT 
      posts.*,
      authors.name AS author_name,
      authors.email AS author_email
    FROM posts
    JOIN authors
      ON posts.author_id = authors.id
    WHERE authors.id = $1
    ORDER BY posts.id ASC
    `,
    [authorId]
  );

  return result.rows;
};

// Crear post
const createPost = async ({
  author_id,
  title,
  content,
  published,
}) => {
  const result = await db.query(
    `
    INSERT INTO posts (
      author_id,
      title,
      content,
      published
    )
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [
      author_id,
      title,
      content,
      published ?? false,
    ]
  );

  return result.rows[0];
};

// Actualizar post
const updatePost = async (
  id,
  {
    author_id,
    title,
    content,
    published,
  }
) => {
  const result = await db.query(
    `
    UPDATE posts
    SET
      author_id = $1,
      title = $2,
      content = $3,
      published = $4
    WHERE id = $5
    RETURNING *
    `,
    [
      author_id,
      title,
      content,
      published,
      id,
    ]
  );

  return result.rows[0];
};

// Eliminar post
const deletePost = async (id) => {
  const result = await db.query(
    `
    DELETE FROM posts
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllPosts,
  getPostById,
  getPostsByAuthor,
  createPost,
  updatePost,
  deletePost,
};