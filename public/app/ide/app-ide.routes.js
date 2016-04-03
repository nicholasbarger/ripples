(function() {
	'use strict';

	angular
		.module('app.ide')
		.config(config);

	function config($routeProvider) {
		$routeProvider
			.when('/ide', {
				templateUrl: 'ide/index.html',
				controller: 'IdeIndexController',
				controllerAs: 'vm'
			})
			.when('/ide/detail/:id', {
				templateUrl: 'ide/detail.html',
				controller: 'RippleDetailController',
				controllerAs: 'vm',
				resolve: {
					ripple: function($route, rippleService) {
						return rippleService.load($route.current.params.id);
					}
				}
			});
	}
})();
