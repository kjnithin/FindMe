app.controller('loginController',['$scope','localStorageService',function($scope,localStorageService){
  $scope.val = localStorageService.get('storeData');
}])
