(function() {
	'use strict';
	
	angular
		.module('app.ide')
		.controller('RippleCreateController', function(rippleCreateService, ripple) {
			var vm = this;
			vm.cancel = rippleCreateService.cancel;
			vm.ripple = ripple;
			vm.submit = rippleCreateService.save;
		});
})();