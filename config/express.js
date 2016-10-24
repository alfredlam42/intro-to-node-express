var express = require('express');
var index = require('../app/controllers/index');
var horses = require('../app/controllers/horses');

module.exports = function(app){
  var app = express();

  app.use('/', index);
  app.use('/horses', horses)

  return app;
}