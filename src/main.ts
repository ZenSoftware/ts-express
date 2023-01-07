import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send('Hello world!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
