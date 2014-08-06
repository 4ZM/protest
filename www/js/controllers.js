angular.module('protest.controllers', [])

.controller('ProtestsCtrl', function($scope, $http, $ionicLoading, Protests) {
  Protests.load();
  $scope.protests = Protests.all();
  $scope.refreshing = false;

  $scope.refresh = function()
  {
    $scope.refreshing = true;

    $http.get('https://www.4zm.org/inofficial/protests.json').
    success(function(data) {
      newProtests = [];

      try {
        newProtests = angular.fromJson(data);
	  }
	  catch(err) {
        $ionicLoading.show({ template: 'Kunde inte uppdatera listan på protester. Fel på dataformatet.', noBackdrop: true, duration: 2000 });
	  }

      for (i = 0; i < newProtests.length; ++i) {
      	Protests.addProtest(newProtests[i]);
      }
      
      $scope.protests = Protests.all();
      $ionicLoading.show({ template: 'Listan av protester har uppdaterats', noBackdrop: true, duration: 2000 });	
      Protests.save($scope.protests);
    }).
    error(function(data, status) {
    	$ionicLoading.show({ template: 'Kunde inte uppdatera listan på protester', noBackdrop: true, duration: 2000 });
    }).
    finally(function() {
      $scope.refreshing = false;
    });

  	$scope.protests = Protests.all();
  }
})

.controller('ProtestDetailCtrl', function($scope, $stateParams, Protests) {
  $scope.protest = Protests.get($stateParams.protestId);
  console.log($scope.protest);
})

.controller('AboutCtrl', function($scope) {
});
