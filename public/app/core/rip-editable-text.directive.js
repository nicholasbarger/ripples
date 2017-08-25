(function() {
  'use strict';

  angular
    .module('app.core')
    .directive('ripEditableText', function($document) {
      return {
        restrict: 'A',
        scope: {

          // the model to bind to (special attribute in angular)
          ngModel: '=',

          // a save method delegate to call after they are finished editing
          save: '='

        },
        require: 'ngModel',
        link: function($scope, elem, attrs) {
          // holder for original ngModel value
          var oldNgModelValue = null;

          // track whether currently editing or just viewing static
          // while editing, keys will be captured to update the ng-model
          // after pressing the 'enter' key
          $scope.isEditing = false;

          // capture mouse click to begin editing the ng-model value
          elem.on('click', function() {
            $scope.isEditing = true;
            elem.css('border-bottom', '1px solid #ccc');
          });

          // capture key strokes to update the ng-model value with
          $document.on('keydown', function(event) {
            // if the oldNgModelValue is empty, give it an initial value
            // we were unable to set it prior to this point because the
            // value was not bound yet
            if (!oldNgModelValue) {
              oldNgModelValue = angular.copy($scope.ngModel);
            }

            // perform various options based on which key pressed
            if ($scope.isEditing) {
              switch (event.which) {
                case 8:  // delete (mac)
                  $scope.ngModel = $scope.ngModel.slice(0, -1);
                  updateVisibleText();
                  break;
                case 13:  // enter
                  save();
                  break;
                case 27:  // esc
                  cancel();
                  break;
                default:
                  // check if it is a visible character
                  if (isASCII(String.fromCharCode(event.which))) {
                    $scope.ngModel += String.fromCharCode(event.which);
                    updateVisibleText();
                  }
                  break;
              }
            }
          });

          // cancel the edit and return ng-model to it's original value
          function cancel() {
            // set old value back the way it was
            $scope.ngModel = angular.copy(oldNgModelValue);
            console.log('ngmodel', $scope.ngModel);

            // stop editing
            stopEditing();
          }

          // helper function for determining ascii codes
          function isASCII(str) {
              // todo: this regex needs some work
              return (/^[a-z0-9!"#$%&'()*+,.\/:;<=>?@\[\] ^_`{|}~-]*$/i).test(str);
          }

          // officially update the ng-model and refresh bindings
          function save() {
            // todo: optionally call a passed in save delegate

            // stop editing
            stopEditing();

            // reset oldNgModelValue since it was intentionally committed
            oldNgModelValue = null;

            // call the delegate if provided
            if ($scope.save) {
              $scope.save($scope.ngModel);
            }
          }

          function stopEditing() {
            // set editing tracking off
            $scope.isEditing = false;

            // remove editing styling
            elem.css('border-bottom', 'none');

            // update text and refresh bindings
            updateVisibleText();
            $scope.$apply();
          }

          // after the model has been updated, this function can be called
          // to update the visible text version so the user knows they've
          // made a change.  We do not update the binding for performance
          function updateVisibleText() {
            elem.html($scope.ngModel);
          }
        }
      };
    });
})();