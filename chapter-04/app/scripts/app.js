define( [
          'angular',
          'angularRoute',
          'services',
          'controllers'
        ], function(angular) {
  'use strict';

  return angular.module('GethubApp', ['ngRoute', 'GethubApp.services', 'GethubApp.controllers']);
});
