(function() {
  'use strict';

  angular
    .module('app.ide')
    .controller('IdeIndexController', function(ideIndexService, ripples) {
      
      var vm = this;
      var state = ideIndexService.getInitialState();

      // properties
      vm.filter = state.filter;
      vm.isDetailVisible = state.isDetailVisible;
      vm.isInfoModalVisible = state.isInfoModalVisible;
      vm.ripples = ripples;
      vm.selectedRipple = state.selectedRipple;
      
      // methods
      vm.selectRipple = ideIndexService.selectRipple;
      vm.toggleInfo = ideIndexService.toggleInfo;
      vm.save = ideIndexService.save;

    });
})();