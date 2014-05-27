var ripples = angular
  .module('ripples', [])
  .constant('appSettings', {
    ver: '0.0.0',
    apiUrl: 'http://localhost:8080/api',
    defaultPageSize: 25
  });