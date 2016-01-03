(function() {
	'use strict';
	
	angular
		.module('app.ide')
		.factory('rippleEditService', function(rippleApi) {
			return {
				disable: disable,
				incrementVersion: incrementVersion,
				load: load,
				save: save
			};

			function disable(_id) {
				return rippleApi.call('delete', '/ripples/' + _id);
			}

			function incrementVersion(version) {
				return version++;
			}

			function load(_id) {
				return rippleApi.call('get', '/ripples/' + _id);
			}

			function save(ripple) {
				return rippleApi.call('put', '/ripples/' + ripple._id, ripple);
			}
		});
})();