const request = require('supertest');
const app = require('../app'); // Adjust path as needed

describe('Cohort Endpoints', () => {
  let cohortId;

  it('should create a cohort', async () => {
    const res = await request(app).post('/api/cohorts').send({
      name: 'Cohort 2025',
      year: 2025,
    });
    expect(res.statusCode).toBe(201);
    cohortId = res.body.id;
  });

  it('should get all cohorts', async () => {
    const res = await request(app).get('/api/cohorts');
    expect(res.statusCode).toBe(200);
  });

  it('should delete cohort', async () => {
    const res = await request(app).delete(`/api/cohorts/${cohortId}`);
    expect(res.statusCode).toBe(204);
  });
});
