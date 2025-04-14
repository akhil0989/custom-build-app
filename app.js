const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// We need to export the app instance for testing
module.exports = app;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
