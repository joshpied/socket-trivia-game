// I, Joshua Piedimonte, student number 000746786, certify that all code submitted is my own work; that I have not copied it from any other source, I also certify that I have not allowed my work to be copied by others.
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/student', (req, res) => {
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

  socket.on('student entered', (username) => {
    io.emit('student entered', username);
  });

  socket.on('question submitted', (form) => {
    io.emit('question submitted', form);
  });

  socket.on('mc answer submitted', (userAnswer) => {
    io.emit('mc answer submitted', userAnswer);
  });

  socket.on('matching answer submitted', (userAnswer) => {
    io.emit('matching answer submitted', userAnswer);
  });

  socket.on('sorted students', (students) => {
    io.emit('sorted students', students);
  });
});


http.listen(3000, () => {
  console.log('listening on localhost:3000');
});
