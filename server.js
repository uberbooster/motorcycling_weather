var express = require('express'),
    logger  = require('morgan')('dev'),
    path    = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    server  = express(),
    Weather = require('./models/weather.model.js');
    WeatherCtrl = require('./controllers/weather.controller.js');
    //Schema = mongoose.Schema,

var port = process.env.PORT || 9000;

server.use(express.static(path.join(__dirname,'public')));
server.use(logger);
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

server.get('/', function(req, res){
  res.sendFile('/public/html/index.html', {root:__dirname});
});
    
server.listen(port, function(){
  console.log('Now listening on port ' + port);
});
