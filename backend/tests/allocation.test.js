const request = require('supertest');
const app = require('../app'); // Adjust path as needed

describe('Allocation Endpoints', () => {
  let allocationId;
  let courseId, facilitatorId;

  beforeAll(async () => {
    // Create course and facilitator
    const courseRes = await request(app).post('/api/courses').send({
      title: 'Web Dev',
      code: 'WD101',
      description: 'Intro to Web',
    });
    courseId = courseRes.body.id;

    const facRes = await request(app).post('/api/auth/register').send({
      username: 'fac2',
      email: 'fac2@example.com',
      password: 'test123',
      role: 'facilitator',
    });
    facilitatorId = facRes.body.user.id;
  });

  it('should assign course to facilitator', async () => {
    const res = await request(app).post('/api/allocations').send({
      courseId,
      facilitatorId,
      classId: 1,
      cohortId: 1,
      modeId: 1,
      semester: 'Fall 2025',
    });
    expect(res.statusCode).toBe(201);
    allocationId = res.body.id;
  });

  it('should fetch all allocations', async () => {
    const res = await request(app).get('/api/allocations');
    expect(res.statusCode).toBe(200);
  });

  it('should fetch allocation by ID', async () => {
    const res = await request(app).get(`/api/allocations/${allocationId}`);
    expect(res.statusCode).toBe(200);
  });
});
