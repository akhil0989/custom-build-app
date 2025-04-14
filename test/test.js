const request = require('supertest');
const app = require('../app');  // Import the Express app

let server;

beforeAll((done) => {
  const port = 0;  // Automatically choose an available port
  server = app.listen(port, done); // Start the server and pass `done` to ensure Jest waits
});

afterAll((done) => {
  server.close(() => {
    done();  // Ensure Jest waits for the server to close before finishing
  });
});

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, World!');
    expect(response.status).toBe(200);
  });
});
