(function() {
	'use strict';

	angular
		.module('app.ide')
		.controller('IdeIndexController', function(ideIndexService) {
			console.log('entered index controller for ide');
			var vm = this;
			vm.filter = ideIndexService.filter;
			vm.ripples = [];

			activate();

			function activate() {
				console.log('loading data');
				// load data
				ideIndexService.load(vm.filter).then(function(data) {
					console.log('data loaded', data);
					vm.ripples = data;
				});
			}
		});
})();