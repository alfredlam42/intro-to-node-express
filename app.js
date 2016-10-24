var port = 1234;
var express = require('./config/express');
var path = require('path');
var logger = require('morgan'); //similar to sinatra where it prints what route you're trying to get to

//requiring sessions
var http = require('http');
var Sessions = require('sessions');
var sessionHandler = new Sessions();

http.createServer(function(req, res){
  var session = sessionHandler.httpRequest(req, res);
});

//requiring dotenv
//since we are only going to call this once, we don't need to give it a variable
require('dotenv').load();

var app = express();

//view engine setup
app.set('views', path.join(__dirname, './app/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.listen(port);
console.log('Server running on http://localhost:' + port);

module.exports = app;