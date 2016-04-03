(function() {
	'use strict';
	
	angular
		.module('app.ide')
		.factory('rippleService', function(rippleApi) {
			return {
				clone: clone,
				current: null,
				disable: disable,
				load: load,
				save: save,
				run: run
			};

			function clone(ripple) {
				return rippleApi.call('clone', '/ripples/clone/' + id);
			}

			function disable(id) {
				return rippleApi.call('delete', '/ripples/' + id);
			}

			function incrementVersion(ripple) {
				// clone ripple
				var clone = clone(ripple);

				// up the version
				clone.version++;

				// save ripple
				save(clone);

				return clone;
			}

			function load(id) {
				return rippleApi.call('get', '/ripples/' + id);
			}

			function save(ripple) {
				return rippleApi.call('post', '/ripples/' + ripple.id, ripple);
			}

			function run(ripple) {
				rippleApi.call('post', '/ripples/run/' + ripple.id, ripple);
			}
		});
})();