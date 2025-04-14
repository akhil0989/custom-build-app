const express = require('express');
const app = express();
const port = 3000;

// Simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const server = app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = { app, server };  // Export both app and server for testing purposes
