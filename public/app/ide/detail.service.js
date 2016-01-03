(function() {
	'use strict';
	
	angular
		.module('app.ide')
		.factory('rippleDetailService', function(rippleData) {
			return {
				current: null,
				load: load
			};

			function load(_id) {
				return rippleData.single(_id);
			}
		});
})();