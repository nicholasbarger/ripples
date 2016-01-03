(function() {
	'use strict';
	
	angular
		.module('app.core')
		.factory('rippleApi', function($http, $q) {
			return {
				call: call
			};

			function call(method, url, data, onSuccess, onError) {
				var deferred = $q.defer();

				if(url.indexOf('api/v') === -1) {
		            url = '/api/v1' + url;
		        }
		        
		        // make ajax call (returns a promise)
    			$http({method: method, url: url, data: data})
    				.then(
        				function(response) {
        					deferred.resolve(response.data);
        				},
        				function(error) {
        					deferred.reject(error);
        				});	

    			return deferred.promise;
			}
		});
})();