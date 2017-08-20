const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path')

// binds middleware to application
app.use(express.static(path.join(__dirname, 'public')));

// root of app
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('a user connected!');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
    console.log(msg);
  });
});

http.listen(3030, function() {
  console.log('listening on *:3030');
});
