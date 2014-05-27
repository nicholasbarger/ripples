ripples
  .controller('manageRipplesController', ['$scope', 'msg', 'rippleFactory', function($scope, msg, rippleFactory) {
    $scope.availableCount = null;
    $scope.ripples = null;
    $scope.ripplesTimestamp = null;
    $scope.selectedRipple = null;
    $scope.selectedRippleTimestamp = null;
    
    var loadRipples = function() {
      rippleFactory.getCollection().then(
        function(payload) {
          $scope.ripples = payload.data;
          $scope.availableCount = payload.availableCount;
          $scope.ripplesTimestamp = payload.dataTimestamp;
        },
        function(err) {
          msg.add('Ripples failed to load properly.');
        }
      );  
    };
    
    $scope.loadRippleDetail = function(ripple) {
      rippleFactory.getSingle(ripple._id).then(
        function(payload) {
          $scope.selectedRipple = payload.data;
          $scope.selectedRippleTimestamp = payload.dataTimestamp;
        },
        function(err) {
          msg.add('Selected ripple ' + ripple.name + ' failed to load.');
        }
      );
    };
    
    $scope.saveRipple = function(ripple) {
      rippleFactory.save(ripple).then(
        function(payload) {
          if(!payload.success) {
            msg.add(payload.message);
          }
          else {
            msg.add('Ripple was saved successfully.', true);
          }
        },
        function(err) {
          msg.add('Selected ripple ' + ripple.name + ' failed to save');
        }
      );
    };
    
    (function init() {
      loadRipples();
    })();
  }]);