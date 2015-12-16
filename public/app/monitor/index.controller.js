(function() {
	'use strict';

	angular
		.module('app-monitor')
			.controller('IndexController', function(indexService) {
				var vm = this;
				vm.filter = indexService.filter;
				vm.instances = indexService.load(vm.filter);
			});
})();