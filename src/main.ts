import 'dotenv/config';
import express from 'express';
import { Client } from 'pg';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

async function sample() {
  const client = new Client();
  await client.connect();
  const sampleQuery = await client.query('SELECT NOW()');
  await client.end();

  console.log('sample', sampleQuery);
}

// sample();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
