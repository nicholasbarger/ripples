(function() {
	'use strict';

	angular
		.module('app.monitor')
			.config(
				function($routeProvider) {
				$routeProvider
					.when('/monitor', {
						templateUrl: 'monitor/index.html',
						controller: 'MonitorIndexController',
						controllerAs: 'vm'
					})
					.when('/monitor/instances/:id', {
						templateUrl: 'monitor/instance-detail.html',
						controller: 'InstanceDetailController',
						controllerAs: 'vm',
						resolve: {
							instance: function($route, instanceDetailService) {
								return instanceDetailService.load($route.current.params.id);
							}
						}
					});
			});	
})();
