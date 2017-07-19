app.controller('storesController',['$scope','storeFactory','localStorageService','$state',function($scope,storeFactory,localStorageService,$state){

  storeFactory.getStores()
    .then((data)=>{
    $scope.stores = data;
  });

}]);
