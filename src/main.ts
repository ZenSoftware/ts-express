import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// For containerizing with Docker
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
