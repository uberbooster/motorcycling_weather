var Ride = require('../models/ride.model.js');
var rideCtrl = {
  getAll: getAllRides,
  create: createRide,
  update: updateRide,
  delete: deleteRide
};

function getAllRides(req, res){
  Ride.find({},function(err,rides){
    if(err) throw err;
    res.json(rides);
  });
};

function createRide(req, res){
  var desc = req.body.desc;
  var rideObj = {
    start: start,

  };
  Ride.create(rideObj, function(err, ride){
    if(err) throw err;

    res.json(ride);
  });
};

function updateRide(req, res){
  var id =  req.params.id;
  var desc = req.body.desc;
  var completed = req.body.completed;
  var update = {
    desc: desc,
    completed: completed
  }
  Todo.findOneAndUpdate({_id:id}, update, function(err, ride){
    if(err) throw err;

    res.json(ride);
  })
};

function deleteRide(req, res){
  var id = req.params.id;
  Todo.findOneAndRemove({_id: id}, function(err, ride){
    if(err) throw err;

    res.json(ride);
  });
};

module.exports = rideCtrl;
