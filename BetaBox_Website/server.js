var express = require('express');
var app = express();
var http = require('http');
var httpServer = http.Server(app);
app.use(express.static(__dirname+'/Pages'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/Pages/home.html');
});
app.listen(3000);
