const request = require('supertest');
const app = require('../app'); // Import the Express app
const server;

beforeAll((done) => {
  const port = 0;  // This tells Node to automatically pick an available port
  server = app.listen(port, () => {
    done();  // When the server starts, the test will proceed
  });
});

afterAll((done) => {
  server.close(done);  // Properly close the server after tests
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
    expect(response.status).toBe(200);
  });
});
