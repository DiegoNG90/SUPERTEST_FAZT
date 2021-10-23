import express from 'express';
const app = express();

app.get('/ping', (req, res) => {
  res.send('Pong');
});

app.get('/tasks', (req, res) => {
  res.json({ tasks: [] });
});

export default app;
