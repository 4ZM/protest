angular.module('protest.controllers', [])

.controller('ProtestsCtrl', function($scope, Protests) {
  Protests.load();
  $scope.protests = Protests.all();
  $scope.refreshing = false;

  $scope.refresh = function()
  {
    // Placeholder function - should initiate refresh
    $scope.refreshing = ($scope.refreshing) ? false : true;

    Protests.addProtest(
      { 
		id: 0, 
      	foe: 'Sverigedemokraterna', 
      	location: 'Kungsörs torg', 
      	time: '2014-07-29 16:00', 
      	icon: "img/sd.png", 
      	url: 'https://www.facebook.com/events/252610284935755/'
      });
    Protests.addProtest(
      { 
		id: 1, 
      	foe: 'Svenskarnas Parti', 
      	location: 'Mynttorget', 
      	time: '2014-07-19 14:00', 
      	icon: "img/svp.png"
      });
    Protests.addProtest(
      { 
      	id: 2, 
      	foe: 'Israels ockupation', 
      	location: 'Slottet', 
      	time: '2014-09-1 14:00'
      });
    Protests.addProtest(
      { 
      	id: 3, 
      	foe: 'Sverigedemokraterna', 
      	location: 'Götaplatsen', 
      	time: '2014-07-29 16:00', 
      	icon: "img/sd.png"
      });

  	$scope.protests = Protests.all();
	Protests.save($scope.protests);
  }
})

.controller('ProtestDetailCtrl', function($scope, $stateParams, Protests) {
  $scope.protest = Protests.get($stateParams.protestId);
  console.log($scope.protest);
})

.controller('AboutCtrl', function($scope) {
});
