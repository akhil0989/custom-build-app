const request = require('supertest');
const app = require('../app'); // Ensure this imports your Express app
const assert = require('assert');

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    assert.strictEqual(response.text, 'Hello, World!');
    assert.strictEqual(response.status, 200);
  });
});
