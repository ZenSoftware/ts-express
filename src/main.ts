import 'dotenv/config';
import express from 'express';
import { Client } from 'pg';

const app = express();

app.get('/', async (req, res) => {
  res.header('Content-Type', 'text/plain');
  res.send(await sample());
});

async function sample() {
  try {
    const client = new Client();
    await client.connect();
    const sampleQuery = await client.query('SELECT NOW()');
    await client.end();

    console.log('sample', sampleQuery);
    return JSON.stringify(sampleQuery);
  } catch (err) {
    console.error(err);
  }
}

sample();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
