const request = require('supertest');
const app = require('../app'); // Ensure this imports your Express app
const chai = require('chai');  // Import Chai for assertion
const expect = chai.expect;    // Use Chai's expect

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
        expect(response.text).to.equal('Hello, World!');  // Use Chai's expect
        expect(response.status).to.equal(200);  // Use Chai's expect
    });
});
