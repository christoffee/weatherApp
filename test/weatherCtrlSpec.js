describe('Unit: WeatherAppCtrl', function() {
  // Load the module with MainController
  beforeEach(module('christoffee.Weatherapp'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('WeatherAppCtrl', {
      $scope: scope
    });
  }));

  //check to see if a defualt value will be assigned to scope.weatherLocation
  it('If no location is set to scope.weatherLocation then it should be set to 44418', 
    function() {
      scope.weatherLocation = '';
      scope.getWeather();
      expect(scope.weatherLocation).toBe(44418);
  });

  //check to see if a value can be set to scope.weatherLocation
  it('If no location is set to 123 then scope.weatherLocation should be set to 123', 
    function() {
      scope.weatherLocation = 123;
      scope.getWeather();
      expect(scope.weatherLocation).toBe(123);
  });

  //check to see if recent data is cleared
  it('Recent data should be cleared', 
    function() {
      scope.getWeather();
      expect(scope.recentData.query).toBeUndefined();
  });

  //check to see if data is cleared and cached as recent data
  it('Data object should be cleared and its data cached to recentData', 
    function() {
      scope.clearData();
      expect(scope.recentData).toBeDefined();
      expect(scope.data.query).toBeUndefined();
  });

})