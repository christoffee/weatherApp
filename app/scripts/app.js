'use strict';

var weatherApp = angular.module('christoffee.Weatherapp', ['ngRoute','ngResource']);

  weatherApp.constant('version', 'v0.1.0');

  weatherApp.config(function($locationProvider, $routeProvider) {

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
