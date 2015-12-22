(function() {
	'use strict';

	angular
		.module('app.ide')
			.factory('ideIndexService', function(rippleApi) {
				console.log('started index service for ide');
				return {
					filter: {},
					load: load
				};

				function load(filter) {
					return rippleApi.call('get', '/ripples', filter);
				}
			});
})();