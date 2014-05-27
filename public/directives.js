ripples
  .directive('control', function() {
    return {
      restrict: 'E',
      scope: {
        type: '@',
        name: '@',
        label: '@',
        placeholder: '@'
      },
      templateUrl: 'templates/form-control.html'
    }
  });