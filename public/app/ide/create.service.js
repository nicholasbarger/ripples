(function() {
	'use strict';
	
	angular
		.module('app.ide')
			.factory('rippleCreateService', function($window, rippleApi) {
				return {
					cancel: cancel,
					newRipple: newRipple,
					save: save
				};

				function cancel() {
					$window.history.back();
				}

				function newRipple() {
					return rippleApi.call('get', '/ripples/new');
				}

				function save(ripple) {
					return rippleApi.call('post', '/ripples/' + ripple.id, ripple);
				}
			});
})();