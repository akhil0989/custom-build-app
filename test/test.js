const request = require('supertest');
const app = require('../app'); // Ensure this imports your Express app

let server;

beforeAll((done) => {
    server = app.listen(3000, done); // Start the server before tests
});

afterAll((done) => {
    server.close(done); // Stop the server after tests
});

describe('GET /', () => {
    it('should return Hello, World!', async () => {
        const response = await request(app).get('/');
        expect(response.text).toBe('Hello, World!');
        expect(response.status).toBe(200);
    });
});
