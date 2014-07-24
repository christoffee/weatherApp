'use strict';
/*
* Post' model as an angular service.
* returns object of a $resource query.
*/
weatherApp.factory('Post', ['$resource', function($resource) {
	return $resource('http://query.yahooapis.com/v1/public/yql', {}, 
		{'query': 
			{method: 'GET', 
			isArray: false
			}
		}); 
}]);