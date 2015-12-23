(function() {
	'use strict';

	angular
		.module('app.ide')
			.config(config);

	function config($routeProvider) {
		$routeProvider
			.when('/not-found', {
				templateUrl: 'core/not-found.html'
			})
			.otherwise({
				redirectTo: '/not-found'
			});
		}
})();
