const request = require('supertest');

const app = require('../src/index');
const db = require('../src/db');

describe('Authors endpoints', () => {

  // GET /authors
  test('GET /authors should return 200 and an array', async () => {
    const response = await request(app)
      .get('/authors');

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // GET /authors/:id existente
  test('GET /authors/:id should return 200', async () => {
    const response = await request(app)
      .get('/authors/1');

    expect(response.statusCode).toBe(200);
  });

  // GET /authors/:id inexistente
  test('GET /authors/:id should return 404 if author does not exist', async () => {
    const response = await request(app)
      .get('/authors/999999');

    expect(response.statusCode).toBe(404);
  });

  // POST /authors válido
  test('POST /authors should return 201', async () => {
    const response = await request(app)
      .post('/authors')
      .send({
        name: 'Test Author',
        email: `test${Date.now()}@mail.com`,
        bio: 'Test bio',
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Test Author');
  });

  // POST /authors inválido
  test('POST /authors should return 400 if name is empty', async () => {
    const response = await request(app)
      .post('/authors')
      .send({
        name: '',
        email: 'invalid@mail.com',
      });

    expect(response.statusCode).toBe(400);
  });

  // POST /authors email duplicado
  test('POST /authors should return 400 if email already exists', async () => {

    const email = `duplicate${Date.now()}@mail.com`;

    // Crear primero
    await request(app)
      .post('/authors')
      .send({
        name: 'First Author',
        email,
      });

    // Intentar duplicar
    const response = await request(app)
      .post('/authors')
      .send({
        name: 'Second Author',
        email,
      });

    expect(response.statusCode).toBe(400);
  });

});

// Cerrar pool al terminar tests
afterAll(async () => {
  await db.pool.end();
});