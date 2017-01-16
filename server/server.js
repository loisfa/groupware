var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req,res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});

app.use('/js', express.static(path.resolve(__dirname + '/../client/js')));

app.listen(3000, function() {
  console.log('listening...');
});
