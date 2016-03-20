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


  $scope.moveUp = function(todo) {
    var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
        $scope.todos.splice(index-1, 0, todo);
}

  $scope.moveDown = function(todo) {
    var index = $scope.todos.indexOf(todo);
        $scope.todos.splice(index, 1);
        $scope.todos.splice(index+1, 0, todo);
}

 //adds to completed list
 // if we wish to have one
  $scope.completedTodosList = [];
    $scope.todo = {};
      $scope.completedItem = function(todo) {
    $scope.completedItemList.push(todo);

    //deletes item from this main list
  var remove = $scope.todos.indexOf(todo)
    $scope.todos.splice(remove, 1);
}

   //deletes item from completed and moves back
  $scope.removeCompleted = function(todo) {
    $scope.todos.push(todo);
      var remove = $scope.completedTodosList.indexOf(todo)
    $scope.completedTodosList.splice(remove, 1);
  }

}

module.exports = rideCtrl;
