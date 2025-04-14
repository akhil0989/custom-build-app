const request = require('supertest');
const app = require('../app');  // Import the Express app

let server;

beforeAll((done) => {
  server = app.listen(3000, done); // Ensure the server is running before tests start
});

afterAll((done) => {
  server.close(done);  // Close the server after the tests are done
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
    expect(response.status).toBe(200);
  });
});
