(function() {
	'use strict';

	angular
		.module('app.ide')
			.controller('IndexController', function(indexService) {
				var vm = this;
				vm.filter = indexService.filter;
				vm.ripples = indexService.load(vm.filter);
			});
})();