angular.module('motoWeatherApp', []); //this is the setter syntax, you are creating an application using this one


angular.module('motoWeatherApp') //this is the getter syntax, we can use this so we don't have to make a variable to store our angular application; YAYYY no globals
      .controller('WeatherController', WeatherController);

WeatherController.$inject = ['$scope', '$http'];//service going to use

function WeatherController($scope, $http){
  $scope.departureTime = {
      value: moment().toDate()
    };
    $scope.tfYear = moment(departureTime).format('YYYY');
    $scope.tfMonth = moment(departureTime).format('MM');
    $scope.tfDay = moment(departureTime).format('DD');
    $scope.tfHour = moment(departureTime).format('hh')-4;
    $scope.tfMinute = moment(departureTime).format('mm');
}
