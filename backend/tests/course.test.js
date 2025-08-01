const request = require('supertest');
const app = require('../app'); // your Express app

describe('Course Endpoints', () => {
  let courseId;

  it('should create a new course', async () => {
    const res = await request(app).post('/api/courses').send({
      title: 'Software Engineering',
      code: 'SE101',
      description: 'Intro to Software Engineering',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    courseId = res.body.id;
  });

  it('should get all courses', async () => {
    const res = await request(app).get('/api/courses');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should get course by ID', async () => {
    const res = await request(app).get(`/api/courses/${courseId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(courseId);
  });

  it('should update course', async () => {
    const res = await request(app).put(`/api/courses/${courseId}`).send({
      title: 'Updated Course Title',
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe('Updated Course Title');
  });

  it('should delete course', async () => {
    const res = await request(app).delete(`/api/courses/${courseId}`);
    expect(res.statusCode).toBe(204);
  });
});
