(function() {
	'use strict';
	
	angular
		.module('app.ide')
		.controller('RippleEditController', function(rippleEditService, ripple) {
			var vm = this;
			vm.incrementVersion = rippleEditService.incrementVersion;
			vm.save = rippleEditService.save;
		});
})();