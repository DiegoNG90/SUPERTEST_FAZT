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
  describe('When title and description are passed', () => {
    const newTask = { title: 'Tarea 1', description: 'test description' };
    test('Should respond with a 200 status code', async () => {
      const RESPONSE = await request(app).post('/task').send(newTask);
      expect(RESPONSE.status).toBe(200);
    });
    test('Should respond with a content-type of application/json', async () => {
      const RESPONSE = await request(app).post('/task').send(newTask);
      expect(RESPONSE.header['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });

    test('Should repond wuth a json object containing the new task with an id', async () => {
      const RESPONSE = await request(app).post('/task').send(newTask);
      expect(RESPONSE.body.id).toBeDefined();
    });
  });

  describe('When title and description are missing', () => {
    test('Should respond with a 400 status code', async () => {
      const RESPONSE = await request(app).post('/task').send({});
      expect(RESPONSE.statusCode).toBe(400);
    });
  });
});
