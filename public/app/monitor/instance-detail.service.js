(function() {
	'use strict';

	angular
		.module('app.monitor')
			.factory('instanceDetailService', function(rippleApi) {
				return {
					load: load
				};

				function load(id) {
					return rippleApi.call('get', '/instances/' + id);
				}
			});
})();