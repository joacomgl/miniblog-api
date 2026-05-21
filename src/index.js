const express = require('express');
const postsRouter = require('./routes/posts');
require('dotenv').config();

const db = require('./db');
const authorsRouter = require('./routes/authors');

const app = express();

app.use(express.json());

// Health check
app.get('/health', async (req, res) => {
  try {
    await db.query('SELECT 1');

    res.status(200).json({
      status: 'ok',
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
});

// Authors routes
app.use('/authors', authorsRouter);
app.use('/posts', postsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;