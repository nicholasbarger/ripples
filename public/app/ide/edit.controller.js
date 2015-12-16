(function() {
	'use strict';
	
	angular
		.module('app.ide')
			.controller('EditController', function(editService, ripple) {
				var vm = this;
				vm.incrementVersion = editService.incrementVersion;
				vm.save = editService.save;
			});
})();