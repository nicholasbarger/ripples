(function() {
	'use strict';

	angular
		.module('app.core')
			.directive('rip-grid', function() {
				return {
					restrict: 'E',
					scope: {

						// the dataset to be displayed in the grid
						data: '@'

					},
					templateUrl: 'rip-grid.directive.tmpl.html',
					transclude: true,
					controllerAs: 'ripGridController',
					controller: function() {
						// todo
					}
				};
			});
})();