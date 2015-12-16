(function() {
	'use strict';

	angular
		.module('app.ide')
			.factory('indexService', function(rippleApi) {
				return {
					filter: {},
					load: load
				};

				function load(filter) {
					return rippleApi.call('get', '/ripples', filter);
				}
			});
})();