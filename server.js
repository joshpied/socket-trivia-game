const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/student', (req, res) => {
  // res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/student.html');
});

app.get('/teacher', (req, res) => {
  res.sendFile(__dirname + '/teacher.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on localhost:3000');
});
