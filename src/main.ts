import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

io.on('connection', socket => {
  console.log('a user connected');
});

const PORT = process.env.PORT || 3080;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
