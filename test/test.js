const request = require('supertest');
const app = require('../app'); // Ensure this imports your Express app
const chai = require('chai');  // Import Chai for assertion
const expect = chai.expect;    // Use Chai's expect

let server;

before(function(done) { // Mocha's before hook
    server = app.listen(3000, done); // Start the server before tests
});

after(function(done) { // Mocha's after hook
    server.close(done); // Stop the server after tests
});

describe('GET /', function() {
    it('should return Hello, World!', function(done) {
        request(app).get('/')
            .then((response) => {
                expect(response.text).to.equal('Hello, World!');  // Use Chai's expect
                expect(response.status).to.equal(200);  // Use Chai's expect
                done(); // Finish the test
            })
            .catch(done); // Pass any error to Mocha's done function
    });
});
