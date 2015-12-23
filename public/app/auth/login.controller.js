(function() {
	'use strict';

	angular
		.module('app.auth')
			.controller('LoginController', function(loginService) {
				var vm = this;
				vm.credentials = loginService.credentials;
				vm.login = loginService.login;
			});
})();