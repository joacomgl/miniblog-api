const request = require('supertest');

const app = require('../src/index');
const db = require('../src/db');

describe('Posts endpoints', () => {

  // GET /posts
  test('GET /posts should return 200 and an array', async () => {
    const response = await request(app)
      .get('/posts');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // GET /posts/:id existente
  test('GET /posts/:id should return 200', async () => {
    const response = await request(app)
      .get('/posts/2');

    expect(response.statusCode).toBe(200);
  });

  // GET /posts/:id inexistente
  test('GET /posts/:id should return 404 if post does not exist', async () => {
    const response = await request(app)
      .get('/posts/999999');

    expect(response.statusCode).toBe(404);
  });

  // POST /posts válido
  test('POST /posts should return 201', async () => {
    const response = await request(app)
      .post('/posts')
      .send({
        author_id: 1,
        title: 'Test Post',
        content: 'Test content',
        published: true,
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe('Test Post');
  });

  // POST /posts inválido
  test('POST /posts should return 400 if title is missing', async () => {
    const response = await request(app)
      .post('/posts')
      .send({
        author_id: 1,
        content: 'Content only',
      });

    expect(response.statusCode).toBe(400);
  });

});

// Cerrar pool al terminar tests
afterAll(async () => {
  await db.pool.end();
});