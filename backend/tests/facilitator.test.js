const request = require('supertest');
const app = require('../app'); // Adjust path as needed

describe('Facilitator Endpoints', () => {
  let facilitatorId;

  it('should register a new facilitator', async () => {
    const res = await request(app).post('/api/auth/register').send({
      username: 'facilitator1',
      email: 'fac1@example.com',
      password: 'test123',
      role: 'facilitator',
    });
    expect(res.statusCode).toBe(201);
    facilitatorId = res.body.user.id;
  });

  it('should get all facilitators', async () => {
    const res = await request(app).get('/api/facilitators');
    expect(res.statusCode).toBe(200);
  });

  it('should get facilitator by ID', async () => {
    const res = await request(app).get(`/api/facilitators/${facilitatorId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(facilitatorId);
  });
});
