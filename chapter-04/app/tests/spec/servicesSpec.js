define(['../customMatchers', 'services'], function(customMatchers) {
'use strict';

  describe('MultiRecipeLoader', function() {
    var _mockBackend, _recipe, _sut;

    beforeEach(module('GethubApp.services'));

    beforeEach(function() {
      jasmine.addMatchers(customMatchers);
    });

    beforeEach(inject(function(_$httpBackend_, Recipe, MultiRecipeLoader) {
      _recipe = Recipe;
      _mockBackend = _$httpBackend_;
      _sut = MultiRecipeLoader;
    }));

    it('should load list of recipes', function() {
      _mockBackend.expectGET('/recipes').respond([{id: 111}, {id: 222}]);

      var recipes;

      var promise = _sut();
      promise.then(function(rec) {
        recipes = rec;
      });

      expect(recipes).toBeUndefined();

      _mockBackend.flush();

      expect(recipes).toNgEqualData([{id: 111}, {id: 222}]);
    })
  });




});
