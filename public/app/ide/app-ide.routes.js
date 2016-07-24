(function() {
  'use strict';

  angular
    .module('app.ide')
    .config(config);

  function config($routeProvider) {
    $routeProvider
      .when('/ide', {
        templateUrl: 'ide/index.html',
        controller: 'IdeIndexController',
        controllerAs: 'vm',
        resolve: {
          ripples: function(ideIndexService) {
            return ideIndexService.getRipples();
          }
        }
      });
  }
})();
