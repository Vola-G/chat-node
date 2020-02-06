const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

server.listen(3000);

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

users = [];
connections = [];

io.sockets.on('connection', function(socket){
    console.log('CONNECTED');
    connections.push(socket);

    socket.on('disconnect', function(data) {
        connections.splice(connections.indexOf(socket), 1);
        console.log('DISCONNECTED');
    });
});