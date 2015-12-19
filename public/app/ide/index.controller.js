(function() {
	'use strict';

	angular
		.module('app.ide')
			.controller('IndexController', function(indexService) {
				var vm = this;
				vm.filter = indexService.filter;
				vm.ripples = [];

				activate();

				function activate() {
					// load data
					indexService.load(vm.filter).then(function(data) {
						vm.ripples = data;
					});
				}
			});
})();