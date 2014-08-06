angular.module('protest.services', [])

.factory('Protests', function() {
  var protests = [];

  return {
    all: function() {
      return protests;
    },
    get: function(strId) {
      intId = parseInt(strId)
      for (i = 0; i < protests.length; ++i) {
        if (protests[i].id === intId)
          return protests[i];
      }
    },
    load: function() {
      var protestsString = window.localStorage['protests'];
      protests = protestsString ? angular.fromJson(protestsString) : [];
    },
    save: function(protests) {
      window.localStorage['protests'] = angular.toJson(protests);
    },
    addProtest: function(newProtest) {

      // Update it if allready exists
      for (i = 0; i < protests.length; ++i) {
        if (protests[i].id === newProtest.id) { 
          protests[i] = newProtest;
          return;
        }
      }

      // Not found, add it to the end
      protests.push(newProtest);
    }
  }
});
