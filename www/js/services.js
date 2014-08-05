angular.module('protest.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Protests', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var protests = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return protests;
    },
    get: function(protestId) {
      // Simple index lookup
      return protests[protestId];
    }
  }
});
