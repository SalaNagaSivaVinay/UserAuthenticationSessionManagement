const express = require('express');
const app = express();
const authRoutes = require('./auth');  // Import auth.js

app.use(express.json());  // Middleware to parse JSON
app.use('/', authRoutes); // Mount the routes

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
