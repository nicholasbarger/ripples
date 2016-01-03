(function() {
	'use strict';

	angular
		.module('app.ide')
		.directive('ripFilter', function() {
			return {
				restrict: 'E',
				scope: {
					data: '=',
					fetch: '@'
				},
				templateUrl: 'ide/rip-filter.directive.tmpl.html',
				controllerAs: 'ripFilterController',
				controller: function() {
					var vm = this;
					vm.criteria = {};
					vm.filter = function() {
						// call the fetch callback and then assign new data
						// bidirectionally to update the grid
						fetch(function(response) {
							vm.data = response.data;
						});
					};
				}
			};
		});
})();