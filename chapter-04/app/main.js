'use strict';

require.config( {
  baseUrl: 'scripts',
  paths: {
    angular:          'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular',
    angularRoute:     'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-route',
    angularResource:  'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-resource'
  },
  shim: {
    'angular' :     { 'exports' : 'angular' },
    'angularRoute': { deps: ['angular'] },
    'angularResource': {
      deps:['angular'],
      'exports':'angular.resource'
    }
  },
  priority: [ "angular" ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
  'angular',
  'app',
  'routes',
  'angularRoute'
], function(angular, app) {
  'use strict';
  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    angular.resumeBootstrap([app['name']]);
  });
});
