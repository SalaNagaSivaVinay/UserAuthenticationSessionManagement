require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const redisClient = require('./config/redis');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();  // Ensure `app` is declared as an instance of Express
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use('/auth', authRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Connect to Database and Redis
(async () => {
    try {
        await connectDB(); // Ensures MongoDB is connected before starting the server

        // Redis Client Events
        redisClient.on('connect', () => console.log('✅ Redis Client Connected'));
        redisClient.on('error', (err) => console.error(`❌ Redis Client Error: ${err}`));

        // Start the server
        app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
    } catch (error) {
        console.error(`❌ Server startup failed: ${error.message}`);
        process.exit(1); // Exit on failure
    }
})();
