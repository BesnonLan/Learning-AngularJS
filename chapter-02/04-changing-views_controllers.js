var aMailApp = angular.module('AMail', ['ngRoute']);

function emailRouteConfig($routeProvider) {
  $routeProvider
    .when('/', {templateUrl: '04-changing-views_list.html', controller: ListController})
    .when('/view/:id',{ templateUrl: '04-changing-views_detail.html', controller: DetailController})
    .otherwise({
    redirectTo: '/'
  });
}

aMailApp.config(['$routeProvider', emailRouteConfig]);

messages = [
  {
    id: 1,
    sender: 'jean@somecompany.com',
    subject: 'Hi there, old friend',
    date: 'Dec 7, 2013 12:32:00',
    recipients: ['greg@somecompany.com', 'waltermitty@lifemagazine.com'],
    message: 'Hey, we should get together for lunch sometime and catch up.'
      +'There are many things we should collaborate on this year.'
  },
  {
    id: 2,
    sender: 'maria@somecompany.com',
    subject: 'Where did you leave my laptop?',
    date: 'Dec 7, 2013 8:15:12',
    recipients: ['greg@somecompany.com'],
    message: 'I thought you were going to put it in my desk drawer.'
      + 'But it does not seem to be there.'
  },
  {
    id: 3,
    sender: 'bill@somecompany.com',
    subject: 'Lost python',
    date: 'Dec 6, 2013 20:35:02',
    recipients: ['greg@somecompany.com'],
    message: 'Nobody panic, but my pet python is missing from her cage.'
      + "She doesn't move too fast, so just call me if you see her."
  }
];

function ListController($scope) {
  $scope.messages = messages;
}

function DetailController($scope, $routeParams) {
  $scope.message = messages[$routeParams.id -1];
}
