function RideService($http){
  return {
    read: getAllRides,
    create: createRide,
    update: updateRide,
    delete: deleteRide
  }

  function getAllRides(){
    return $http.get('/api/rides')
            .then(function(response){
                    return response.data;
                  });
  }
  function createRide(rideObj){
    console.log("I am here");
      return $http.post('/api/rides', rideObj)
        .then(function(response){
          console.log(response);
        })
        .catch(function(err){
          console.error(err);
        });
  }
  function updateRide(id, rideObj){
    return $http.put('/api/rides/' + rideObj._id, rideObj)
            .then(function(response){
            })
            .catch(function(err){
              console.error(err);
            });
  }
  function deleteRide(id){
    return $http.delete('/api/rides/'+id)
            .catch(function(err){
              console.error(err);
            });
  }
}
