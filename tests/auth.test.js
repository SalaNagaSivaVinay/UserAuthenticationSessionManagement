const request = require('supertest');
const app = require('../index');

describe('Auth API Tests', () => {
    it('should register a new user', async () => {
        const res = await request(app).post('/auth/register').send({
            username: 'testuser',
            email: 'testuser@example.com',
            password: 'password123'
        });

        expect(res.statusCode).toEqual(201);
        expect(res.body.message).toEqual('User registered successfully');
    });

    it('should login successfully', async () => {
        const res = await request(app).post('/auth/login').send({
            email: 'testuser@example.com',
            password: 'password123'
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('Login successful');
    });
});
