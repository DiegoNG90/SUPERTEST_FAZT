import express from 'express';
const app = express();

app.use(express.json());

app.get('/ping', (req, res) => {
  res.send('Pong');
});

app.get('/tasks', (req, res) => {
  res.json({ tasks: [] });
});

app.post('/task', (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.sendStatus(400);
  }

  return res.json({ id: Date.now(), title, description });
});

export default app;
