(function() {
	'use strict';
	
	angular
		.module('app.ide')
			.controller('CreateController', function(createService, ripple) {
				var vm = this;
				vm.cancel = createService.cancel;
				vm.ripple = ripple;
				vm.submit = createService.save;
			});
})();