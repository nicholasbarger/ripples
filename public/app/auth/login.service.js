(function() {
  'use strict';

  angular
    .module('app.auth')
      .factory('loginService', function(rippleApi) {
        return {
          credentials: { email: null, password: null },
          login: login
        };

        function login() {
          return rippleApi.call('post', '/auth/login', this.credentials);
        }
      });
})();
