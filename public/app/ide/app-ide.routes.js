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
			.when('/ide/create', {
				templateUrl: 'ide/create.html',
				controller: 'RippleCreateController',
				controllerAs: 'vm',
				resolve: {
					ripple: function(rippleCreateService) {
						return rippleCreateService.newRipple();
					}
				}
			})
			.when('/ide/detail/:id', {
				templateUrl: 'ide/detail.html',
				controller: 'RippleDetailController',
				controllerAs: 'vm',
				resolve: {
					ripple: function($route, rippleEditService) {
						return rippleEditService.load($route.current.params.id);
					}
				}
			})
			.when('/ide/disable/:id', {
				templateUrl: 'ide/disable.html',
				controller: 'RippleDisableController',
				controllerAs: 'vm',
				resolve: {
					ripple: function(rippleEditService) {
						return rippleEditService.ripple;
					}
				}
			})
			.when('/ide/edit/:id', {
				templateUrl: 'ide/edit.html',
				controller: 'RippleEditController',
				controllerAs: 'vm',
				resolve: {
					ripple: function(rippleEditService) {
						return rippleEditService.ripple;
					}
				}
			});
	}
})();
