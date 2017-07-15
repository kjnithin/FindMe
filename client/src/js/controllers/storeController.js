app.controller('storeController',['$scope','storeFactory',function($scope,storeFactory){

  storeFactory.getStores()
    .then((data)=>{
    $scope.stores = data;
  });

  // $scope.storeSlug = (slug) =>{
  //   storeFactory.getStore(slug)
  //   .then((data) =>{
  //     console.log(data);
  //   })
  // }

}]);
