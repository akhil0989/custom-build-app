const request = require('supertest');
const { app, server } = require('../app');
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).to.equal('Hello, World!');
    expect(response.status).to.equal(200);
  });

  after(() => {
    server.close();  // Close the server after tests complete
  });
});
