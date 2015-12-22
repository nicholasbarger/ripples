(function() {
	'use strict';
	
	angular
		.module('app.monitor')
			.controller('InstanceDetailController', function(instance) {
				var vm = this;
				vm.instance = instance;
			});
})();