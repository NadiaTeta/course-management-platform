const request = require('supertest');
const app = require('../app');
const { sequelize } = require('../config/db');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

describe('Auth API', () => {
  it('should register a user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password123', role: 'student' });
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty('username', 'testuser');
  });

  it('should login a user', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'testuser', password: 'password123' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
