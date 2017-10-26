var express = require('express');
var app = express();
var path = require('path');


var meetupsController = require('./server/controllers/meetups-controller.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());
app.get('/', function(req,res) {
  res.sendFile(path.resolve(__dirname + '/client/index.html'));
});
app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);
app.use('/js', express.static(path.resolve(__dirname + '/client/js')));


app.listen(3000, function() {
  console.log('Listening on port 3000...');
});

//app.use('/static',express.static('../client'));
/*
app.get(/edit\/..+/,function(req, res){
    res.sendFile('editor.html',{root:'../client'});
});
app.get(/read\/..+/,function(req, res){
    res.sendFile('reader.html',{root:'../client'});
});
app.get('/', function(req, res){
    res.redirect('/static');
});
*/

// sharedb
var http = require('http');
var ShareDB = require('sharedb');
var WebSocket = require('ws');
var WebSocketJSONStream = require('websocket-json-stream');

// Maybe the mongo creation should also be in the startServer function?
const db = require('sharedb-mongo')('mongodb://localhost:27017/test');
const backend = new ShareDB({db});

var server = http.createServer(app);

// Connect any incoming WebSocket connection to ShareDB
var wss = new WebSocket.Server({server: server});

wss.on('connection', function(ws, req) {
    var stream = new WebSocketJSONStream(ws);
    backend.listen(stream);
    console.log("ws: "+ws+" stream: "+stream.data);
});


wss.on('message', function incoming(data, flags) {
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
  console.log("received message");
});

server.listen(8080);
console.log('Listening on http://localhost:8080');
