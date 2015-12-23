(function() {
	'use strict';

	angular
		.module('app.auth')
			.config(
				function($routeProvider) {
				$routeProvider
					.when('/login', {
						templateUrl: 'auth/login.html',
						controller: 'LoginController',
						controllerAs: 'vm'
					})
					.when('/signup', {
						templateUrl: 'auth/signup.html',
						controller: 'SignupController',
						controllerAs: 'vm'
					});
			});	
})();
