import express from 'express';
import http from 'http';
import cors from 'cors';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:19006',
    },
});

io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (data) {
        io.emit('chat message', data);
    });
});

server.listen(PORT, function () {
    console.log(`listening on *:${PORT}`);
});
