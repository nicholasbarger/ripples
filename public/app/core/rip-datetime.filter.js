(function() {
	'use strict';

	angular
		.module('app.core')
		.filter('ripDateTime', ripDateTime);

	function ripDateTime() {
		return function(input) {
			return moment(input).format('L LTS');
		};
	}
})();