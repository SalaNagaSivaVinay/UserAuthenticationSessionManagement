import { createClient } from 'redis';

const redisClient = createClient({
    url: process.env.REDIS_URL,
    socket: {
        tls: true,  // TLS connection kosam mandatory
    }
});

redisClient.on('error', (err) => console.error('❌ Redis Client Error:', err));

await redisClient.connect();

console.log('✅ Redis Connected Successfully');

export default redisClient;
