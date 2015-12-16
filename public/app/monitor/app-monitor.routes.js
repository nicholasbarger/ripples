(function() {
	'use strict';

	angular
		.module('app-monitor')
			.config(
				function($routeProvider) {
				$routeProvider
					.when('/monitor', {
						templateUrl: 'index.html',
						controller: 'IndexController'
					});
			});	
})();
