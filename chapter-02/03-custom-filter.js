var customFilterApp = angular.module('customFilterApp', []);

customFilterApp.filter('titleCase', function() {
  var titleCaseFilter = function(input) {
    var words = input.split(' ');

    for (var i = 0; i < words.length; i++)
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();

    return words.join(' ');
  };

  return titleCaseFilter;
});

customFilterApp.controller('titleController', function ($scope) {
  $scope.pageHeading = 'title sample';
});
