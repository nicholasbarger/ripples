(function() {
	'use strict';

	angular
		.module('app-gallery')
			.config(config);	

	function config($routeProvider) {
		$routeProvider
			.when('/gallery', {
				templateUrl: 'index.html',
				controller: 'IndexController'
			})
			.when('/gallery/ripples/:id', {
				templateUrl: 'gallery-detail.html',
				controller: 'GalleryDetailController'
			});
	}
})();
