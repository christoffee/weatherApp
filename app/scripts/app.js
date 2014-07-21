'use strict';

angular.module('christoffee.Weatherapp', ['ngAnimate', 'ngRoute'])

  .constant('version', 'v0.1.0')

  .config(function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/weather', {
        templateUrl: 'views/weather.html'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
