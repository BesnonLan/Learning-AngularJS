'use strict';

GethubApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'ListCtrl',
      templateUrl: '/views/list.html'
    })
}]);
