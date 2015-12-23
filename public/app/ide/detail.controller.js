(function() {
	'use strict';
	
	angular
		.module('app.ide')
			.controller('RippleDetailController', function(ripple) {
				console.log('RippleDetailController here', ripple);
				var vm = this;
				vm.ripple = ripple;
			});
})();