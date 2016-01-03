(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('ripInput', function() {
      return {
        restrict: 'E',
        scope: {

          // the display label of the input control
          label: '@',

          // the name of the input control (unique identifier)
          name: '@',

          // todo: the model to bind to (special attribute in angular)
          ngModel: '=',

          // a default placeholder text to show
          placeholder: '@',

          // specifies whether the control is readonly or not
          readonly: '@',

          // the type of input control (text, date, textarea, etc.)
          type: '@'

        },
        require: 'ngModel',
        templateUrl: 'core/rip-input.directive.tmpl.html',
        controllerAs: 'ripInputController',
        controller: function() {
          // todo
        }
      };
    });
})();