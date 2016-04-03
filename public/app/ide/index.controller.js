(function() {
	'use strict';

	angular
		.module('app.ide')
		.controller('IdeIndexController', function(ideIndexService) {
			console.log('entered index controller for ide');
			var vm = this;
			vm.filter = ideIndexService.filter;
			vm.isDetailVisible = false;
			vm.isInfoModalVisible = false;
			vm.selectedRipple = null;
			vm.selectRipple = selectRipple;
			vm.toggleInfo = toggleInfo;
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

			function selectRipple(ripple) {
				// toggle display of detail panel
				if (vm.selectedRipple != ripple) {
					vm.isDetailVisible = true;
				} else {
					vm.isDetailVisible = false;
				}
				
				// select ripple to view details
				vm.selectedRipple = ripple;
			}

			function toggleInfo() {
				vm.isInfoVisible = !vm.isInfoVisible;
			}
		});
})();