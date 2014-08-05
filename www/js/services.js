angular.module('protest.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Protests', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var protests = [
    { id: 0, foe: 'Sverigedemokraterna', location: 'Kungsörs torg', time: '2014-07-29 14:00', url: 'https://www.facebook.com/events/252610284935755/'},
    { id: 1, foe: 'Svenskarnas Parti', location: 'Mynttorget', time: '2014-07-19 14:00'  },
    { id: 2, foe: 'Israels ockupation', location: 'Slottet', time: '2014-09-1 14:00'  },
    { id: 3, foe: 'Sverigedemokraterna', location: 'Götaplatsen', time: '2014-07-29 16:00'  }
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
