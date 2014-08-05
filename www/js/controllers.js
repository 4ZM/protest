angular.module('protest.controllers', [])

.controller('ProtestsCtrl', function($scope, Protests) {
  $scope.protests = Protests.all();
  $scope.refreshing = false;
  $scope.refresh = function()
  {
    // Placeholder function - should initiate refresh
    $scope.refreshing = ($scope.refreshing) ? false : true;
  }
})

.controller('ProtestDetailCtrl', function($scope, $stateParams, Protests) {
  $scope.protest = Protests.get($stateParams.protestId);
})

.controller('AboutCtrl', function($scope) {
});
