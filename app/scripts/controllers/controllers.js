'use strict';

angular.module('christoffee.Weatherapp')

  .controller('WeatherAppCtrl', function($scope, Post) {

    $scope.data = {};
    
    /*
    * Updates the query to the rest resource with the current
    * location and sets the return format to json.
    */
    $scope.updateSearch = function () {
      Post.query({'q':$scope.getQuery(),'format':'json'}, {}, function (response) {
        $scope.data = response;
      });
    };

    //Sets the loaction and and calls the updateSearch()
    $scope.setLocation = function(locationID){
        $scope.weatherLocation = locationID;
        $scope.updateSearch();
    };

    //Checks to see if the locations is set, returns boolean
    $scope.locationIsSet = function(locationID){
        this.weatherLocation = $scope.weatherLocation || 44418;
        return this.weatherLocation === locationID;
    };

    //returns the query with the current loaction
    $scope.getQuery = function(){
        this.weatherLocation = $scope.weatherLocation || 44418;
        return 'select item from weather.forecast where woeid=' + this.weatherLocation;
    };

    // TODO: add functionality to change the tempurature unit.
    // $scope.setUnit = function(UnitID){
    //     $scope.weatherUnit = UnitID;
    // }

    // $scope.unitIsSet = function(UnitID){
    //     $scope.weatherUnit = $scope.weatherUnit || 'c';
    //     return $scope.weatherUnit === UnitID;
    // }
    
  });
