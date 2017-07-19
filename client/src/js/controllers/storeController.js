app.controller('storeController',['$scope','storeFactory','$stateParams',function($scope,storeFactory,$stateParams){

 var slug =$stateParams.slug ;

   storeFactory.getStore(slug)
   .then((data)=>{
     $scope.name = data.name;
     $scope.description = data.description;
      $scope.location = data.location.address;
      $scope.lng = data.location.coordinates[0];
      $scope.lat = data.location.coordinates[1];
      $scope.tags = data.tags;
   })

}]);
