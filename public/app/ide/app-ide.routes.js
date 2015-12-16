(function() {
	'use strict';

	angular
		.module('app.ide')
			.config(config);

	function config($routeProvider) {
		$routeProvider
			.when('/ide', {
				templateUrl: 'ide/index.html',
				controller: 'IndexController',
				controllerAs: 'vm'
			})
			.when('/ide/create', {
				templateUrl: 'ide/create.html',
				controller: 'CreateController',
				controllerAs: 'vm',
				resolve: {
					ripple: function(createService) {
						return createService.newRipple();
					}
				}
			})
			.when('/ide/detail/:id', {
				templateUrl: 'ide/detail.html',
				controller: 'DetailController',
				controllerAs: 'vm',
				resolve: {
					ripple: function(editService) {
						return editService.ripple;
					}
				}
			})
			.when('/ide/disable/:id', {
				templateUrl: 'ide/disable.html',
				controller: 'DisableController',
				controllerAs: 'vm',
				resolve: {
					ripple: function(editService) {
						return editService.ripple;
					}
				}
			})
			.when('/ide/edit/:id', {
				templateUrl: 'ide/edit.html',
				controller: 'EditController',
				controllerAs: 'vm',
				resolve: {
					ripple: function(editService) {
						return editService.ripple;
					}
				}
			});
	}
})();
