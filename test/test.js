const request = require('supertest');
const app = require('../app');  // Import the app

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');  // Sending GET request
    expect(response.text).toBe('Hello, World!');  // Assert response text
    expect(response.status).toBe(200);  // Assert response status
  });
});

// Ensure the server shuts down after the test is done (prevent Jest from hanging)
afterAll((done) => {
  app.close(done);
});
