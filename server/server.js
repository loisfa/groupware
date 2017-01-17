var express = require('express');
var app = express();
var path = require('path');
var meetupsController = require('./controllers/meetups-controller.js');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mean-demo');

app.use(bodyParser());

app.get('/', function(req,res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.post('/api/meetups', meetupsController.create);
app.get('/api/meetups', meetupsController.list);

app.use('/js', express.static(path.resolve(__dirname + '/../client/js')));

app.listen(3000, function() {
  console.log('listening...');
});
