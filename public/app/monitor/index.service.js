(function() {
	'use strict';

	angular
		.module('app.monitor')
			.factory('monitorIndexService', function(rippleApi) {
				return {
					filter: {},
					load: load
				};

				function load(filter) {
					return rippleApi.call('get', '/instances', filter);
				}
			});
})();