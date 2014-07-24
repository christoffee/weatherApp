'use strict';

weatherApp.controller('WeatherAppCtrl', function($scope, Post) {
    $scope.noResults = false;
    $scope.userSearchText = '';
    $scope.data = {};
    $scope.recentData = {};
    
    /*
    * Updates the query to the rest resource with the current
    * location and sets the return format to json.
    */
    $scope.updateSearch = function (query) {
      Post.query({'q':query,'format':'json'}, {}, function (response) {
        $scope.data = response;
        $scope.noResults = !response.query.count;

        if(response.query.count === 1 && !response.query.results.channel){
            $scope.setLocation();
            $scope.getWeather();
        }
      });
    };

    //Sets the loaction and and calls the updateSearch()
    $scope.setLocation = function(locationID){
        $scope.weatherLocation = locationID;
        $scope.updateSearch($scope.getWeather());
    };

    //clear and cache data
    $scope.clearData = function(){
        $scope.recentData = $scope.data;
        $scope.data = {};
    };

    //returns the query with the current loaction
    $scope.getWeather = function(){
        $scope.recentData = {};
        this.weatherLocation = $scope.weatherLocation || 44418;
        return 'select item from weather.forecast where woeid=' + this.weatherLocation;
    };

    //Search locations calls the updateSearch()
    $scope.searchLocations = function(){
        $scope.updateSearch($scope.getLocations());
    };

    //returns the query with the users search loaction
    $scope.getLocations = function(){
        return 'select * from geo.places where text="' + $scope.userSearchText + '"';
    };
  });
