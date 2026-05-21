const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  test('responds with miniblog-api OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'miniblog-api OK' });
  });
});
