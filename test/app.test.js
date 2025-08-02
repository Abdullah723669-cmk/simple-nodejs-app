const request = require('supertest');
const app = require('../src/server');

describe('GET /', () => {
  it('should return Hello, World! -- How are you??', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello, World! -- How are you??');
  });
});
