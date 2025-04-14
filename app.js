const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Don't start the server here, just export the app
// module.exports = app;  <-- this line is correct for testing

if (require.main === module) { // This ensures server starts only if run directly
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app; // Exporting the app for testing
