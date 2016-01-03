(function() {
	'use strict';

	angular
		.module('app.core')
		.filter('ripDate', ripDate);

	function ripDate() {
		return function(input) {
			return moment(input).format('L');
		};
	}
})();