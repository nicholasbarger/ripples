(function() {
	'use strict';
	
	angular
		.module('app.core')
			.factory('rippleApi', function($http) {
				return {
					call: call
				};

				function call(method, url, data, onSuccess, onError) {
					if(url.indexOf('api/v') === -1) {
			            url = '/api/v1' + url;
			        }
			        
			        // make ajax call (returns a promise)
        			return $http({method: method, url: url, data: data});	
				}
			});
})();