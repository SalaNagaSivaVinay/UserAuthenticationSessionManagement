const redis = require('redis');

const client = redis.createClient({
    url: process.env.REDIS_URI || 'redis://localhost:6379'  // Default to localhost if .env is missing
});

// Redis Event Handlers
client.on('connect', () => console.log('✅ Redis Connected Successfully'));
client.on('error', (err) => console.error(`❌ Redis Connection Error: ${err}`));

client.connect();

module.exports = client; // Correctly export the `client`
