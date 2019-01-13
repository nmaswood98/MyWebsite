var HTMLElement = typeof HTMLElement === 'undefined' ? function(){} : HTMLElement;
var path = require('path');
var express = require('express');
var http = require('http');

var publicPath = path.join(__dirname + "/..");
var app = express();
var HTTPserver = http.createServer(app);

app.use(express.static(publicPath));



app.get('/', function(req, res) {
  
    res.sendFile(path.join(publicPath + '../index.html'));
  //  //console.log("hello");
});

HTTPserver.listen(3000, function () {
    //  //console.log('server is up biath');
  
  });
  