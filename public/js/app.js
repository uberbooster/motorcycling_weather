angular.module('motoWeatherApp', []); //this is the setter syntax, you are creating an application using this one


angular.module('motoWeatherApp') //this is the getter syntax, we can use this so we don't have to make a variable to store our angular application; YAYYY no globals
      .controller('WeatherController', WeatherController);

WeatherController.$inject = ['$scope', '$http', 'RideService'];//service going to use
