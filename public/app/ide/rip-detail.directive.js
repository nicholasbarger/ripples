(function() {
	'use strict';

	angular
		.module('app.ide')
		.directive('ripDetail', function() {
			return {
				restrict: 'E',
				scope: {
					ripple: '='
				},
				templateUrl: 'ide/rip-detail.directive.tmpl.html',
				controllerAs: 'ripDetailVm',
				bindToController: true,
				controller: function(rippleService) {
					var vm = this;
					vm.edit = edit;
					vm.selectedRipple = null;
					vm.run = rippleService.run;

					activate();

					function activate() {
					}

					function edit() {
						// todo: change to edit mode
					}
				}
			};
		});
})();