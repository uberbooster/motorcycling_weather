var express = require('express'),
    logger  = require('morgan')('dev'),
    path    = require('path'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    server  = express(),
    Weather = require('./models/ride.model.js');
    WeatherCtrl = require('./controllers/ride.controller.js');
    //Schema = mongoose.Schema,
//mongoose.connect('mongodb://uberbooster:5vgsdpFn@i!!rnAI7MHUGCI7st@ds023468.mlab.com:23468/motorcyclingweather');
mongoose.connect('mongodb://localhost/motorcyclingWeatherApp');

var port = process.env.PORT || 9000;

server.use(express.static(path.join(__dirname,'public')));
server.use(logger);
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

server.get('/', function(req, res){
  res.sendFile('/public/html/index.html', {root:__dirname});
});
server.get('/brad', function(req, res){
  res.sendFile('/public/html/brad.html', {root:__dirname});
});
server.get('/mike', function(req, res){
  res.sendFile('/public/html/mike.html', {root:__dirname});
});
server.get('/kevin', function(req, res){
  res.sendFile('/public/html/kevin.html', {root:__dirname});
});
server.get('/ting', function(req, res){
  res.sendFile('/public/html/ting.html', {root:__dirname});
});

server.listen(port, function(){
  console.log('Now listening on port ' + port);
});
