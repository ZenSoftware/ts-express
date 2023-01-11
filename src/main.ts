import express from 'express';
import cors from 'cors';
import isPrime from './is-prime';

const app = express();
app.use(cors());

app.get('/:num', (req, res) => {
  const result = isPrime(+req.params.num);
  res.json(result);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
