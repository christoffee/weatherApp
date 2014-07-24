'use strict';
/*
* Post' model as an angular service.
* returns object of a $resource query.
*/
angular.module('christoffee.Weatherapp').factory('Post', ['$resource', function($resource) {
	return $resource('http://query.yahooapis.com/v1/public/yql', {}, {'query': {method: 'GET', isArray: false}}); 
}]);