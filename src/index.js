import express from 'express';
const app = express();

app.get('/ping', (req, res) => {
  res.send('Pong');
});

app.listen(3000, () => console.log('Server listening on port 3000'));
