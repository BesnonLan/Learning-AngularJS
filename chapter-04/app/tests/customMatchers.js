define([], function() {

  return {
    toNgEqualData: function (util, customEqualityTesters) {
      return {
        compare: function(actual, expected) {
          return { pass: angular.equals(actual, expected) };
        }
      }
    }
  };


});
