(function() {
  'use strict';

  angular
    .module('app.ide')
    .factory('ideIndexService', function(rippleService) {

      return {
        getInitialState: getInitialState,
        getRipples: getRipples,
        save: save,
        selectRipple: selectRipple,
        toggleInfo: toggleInfo
      };

      function getInitialState() {
        return {
          filter: {},
          isDetailVisible: false,
          isInfoModalVisible: false,
          selectedRipple: null
        };
      }

      function getRipples() {
        return rippleService.many(getInitialState().filter);
      }

      function save(vm, ripple) {
        // todo
        return null;
      }

      function selectRipple(vm, ripple) {
        // toggle display of detail panel
        if (vm.selectedRipple != ripple) {
          vm.isDetailVisible = true;
        } else {
          vm.isDetailVisible = false;
        }

        // select ripple to view details
        vm.selectedRipple = ripple;
      }

      function toggleInfo(vm) {
        vm.isInfoVisible = !vm.isInfoVisible;
      }
      
    });
})();