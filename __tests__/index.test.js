// import jest from 'jest';
import request from 'supertest';

import app from '../src/app.js';

describe('GET /tasks', () => {
  test('Should respond with status code 200', async () => {
    const RESPONSE = await request(app).get('/tasks').send();
    // console.log(`RESPONSE`, RESPONSE);
    expect(RESPONSE.status).toBe(200);
  });

  test('Should respond with an array', async () => {
    const RESPONSE = await request(app).get('/tasks').send();
    expect(RESPONSE.body.tasks).toBeInstanceOf(Array);
  });
});
