(function() {
	'use strict';

	angular
		.module('app.core')
		.factory('rippleData', function (rippleApi) {
			return {
				disable: disable,
				newRipple: newRipple,
				save: save
			}

			function disable(_id) {
				return rippleApi.call('delete', '/ripples/' + _id);
			}

			function newRipple() {
				return rippleApi.call('get', '/ripples/new');
			}

			function save(ripple) {
				return rippleApi.call('post', '/ripples/' + ripple.id, ripple);
			}
		});
})();