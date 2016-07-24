(function() {
  'use strict';

  angular
    .module('app.monitor')
      .controller('MonitorIndexController', function(monitorIndexService) {
        var vm = this;
        vm.filter = monitorIndexService.filter;
        vm.instances = [];

        activate();

        function activate() {
          // load data
          monitorIndexService.load(vm.filter).then(function(data) {
            vm.instances = data;
          });
        }
      });
})();