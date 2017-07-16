app.controller('storesController',['$scope','storeFactory',function($scope,storeFactory){

  storeFactory.getStores()
    .then((data)=>{
    $scope.stores = data;
  });

  $scope.storeSlug = (slug) =>{
    storeFactory.getStore(slug)
    .then((data) =>{
     $scope.storeTitle=data.name;
     console.log($scope.storeTitle);
    })
  }

}]);
