(function() {
	'use strict';

	angular
		.module('app.core')
		.filter('ripTime', ripTime);

	function ripTime() {
		return function(input) {
			return moment(input).format('LTS');
		};
	}
})();