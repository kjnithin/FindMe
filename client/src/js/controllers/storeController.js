app.controller('storeController',['$scope','storeFactory',function($scope,storeFactory){

  storeFactory.getStore()
  .then((data) =>{

   console.log(data);
  })
}]);
