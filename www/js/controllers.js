angular.module('protest.controllers', [])

.controller('ProtestsCtrl', function($scope, Protests) {
  $scope.protests = Protests.all();
})

.controller('ProtestDetailCtrl', function($scope, $stateParams, Protests) {
  $scope.protest = Protests.get($stateParams.protestId);
})

.controller('AboutCtrl', function($scope) {
});
