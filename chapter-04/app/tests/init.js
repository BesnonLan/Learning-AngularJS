require.config({
  baseUrl: '../scripts',
  paths: {
    jasmine: '../vendor/jasmine-2.0.0/jasmine',
    jasmineHtml: '../vendor/jasmine-2.0.0/jasmine-html',
    jasmineBoot: '../vendor/jasmine-2.0.0/boot-without-onload',
    angular: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular',
    angularRoute: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-route',
    angularResource: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-resource',
    angularMocks: 'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.9/angular-mocks'
  },
  shim: {
    'jasmineHtml': {
      deps: ['jasmine']
    },
    'jasmineBoot': {
      deps: ['jasmine', 'jasmineHtml']
    },
    'angular': {
      'exports': 'angular'
    },
    'angularRoute': {
      deps: ['angular']
    },
    'angularResource': {
      deps: ['angular'],
      'exports': 'angular.resource'
    },
    'angularMocks': {
      deps: ['angular', 'angularResource', 'angularRoute'],
      'exports': 'angular.mocks'
    }
  }
});

require(["jasmineBoot", "angularMocks"], function(angular) {
  window.executeTest();
});