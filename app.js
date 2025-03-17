const express = require('express'); 
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middleware/errorHandler');
const { createClient } = require('redis'); // Redis import

const app = express();

// Redis Client Setup
const redisClient = createClient({
    url: process.env.REDIS_URL, // Add this in your .env file
    socket: {
        tls: true,
        rejectUnauthorized: false // For Upstash Redis TLS
    }
});

// Redis Connection
redisClient.on('error', (err) => console.error('Redis Client Error', err));

(async () => {
    await redisClient.connect();
    console.log('✅ Connected to Redis Successfully!');
})();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// **Home Route (Fix for `Cannot GET /` error)**
app.get('/', (req, res) => {
    res.send('Welcome to the User Authentication System!');
});


// Routes
app.use('/auth', authRoutes);

// Error Handling Middleware
app.use(errorHandler);

module.exports = app; // Export for index.js to import
