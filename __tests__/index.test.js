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

describe('POST /task', () => {
  // Should respond with a 200 status code
  test('Should respond with a 200 status code', async () => {
    const RESPONSE = await request(app).post('/task').send();
    expect(RESPONSE.status).toBe(200);
  });
  // Should respond with a content-type of application/json
  test('Should respond with a content-type of application/json', async () => {
    const RESPONSE = await request(app).post('/task').send();
    expect(RESPONSE.header['content-type']).toEqual(
      expect.stringContaining('json')
    );
  });

  // Should repond wuth a json object containing the new task with an id
  test('Should repond wuth a json object containing the new task with an id', async () => {
    const RESPONSE = await request(app)
      .post('/task')
      .send({ title: 'Tarea 1', description: 'test description' });
    expect(RESPONSE.body.id).toBeDefined();
  });
});
