ripples
  .service('msg', function() {
    return {
      add: add
    };
    
    function add(message, isSuccess) {
      // todo: need to display messages somehow or register for display  
    }
  })
  .factory('rippleFactory', ['$http', '$q', function($http, $q) {
    return {
      getCollection: getCollection,
      getSingle: getSingle,
      save: save
    };
    
    function getCollection() {
      var deferred = $q.defer();
      $http.get('/ripples')
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });
      
      return deferred.promise;
    }
    
    function getSingle(_id) {
      var deferred = $q.defer();
      $http.get('/ripples/' + _id)
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });
      
      return deferred.promise;
    }
    
    function save(ripple) {
      var deferred = $q.defer();
      $http.post('/ripples/' + ripple._id, ripple)
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });
      
      return deferred.promise;
    }
  }]);