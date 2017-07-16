app.controller('addController',['$scope','storeFactory','$state','toastr',function($scope,storeFactory,$state,toastr){

  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
      let location = $scope.addForm.address.getPlace().geometry.location;
      $scope.addForm.address=$scope.addForm.address.getPlace().formatted_address;
      $scope.addForm.lng=location.lat();
      $scope.addForm.lat=location.lng();
      $scope.$apply();
  });

  $scope.addForm ={};

  $scope.addStore = ()=>{

    let tagObject = $scope.addForm.tags;
    let tag = [];
     for(key in tagObject){
       tag.push(tagObject[key]);
     }

     $scope.addStoreForm ={
       'name':$scope.addForm.name,
       'description':$scope.addForm.description,
       'tags':tag,
       'location':{
         'coordinates':[$scope.addForm.lat,$scope.addForm.lng],
         'address':$scope.addForm.address
       }
     };

     storeFactory.createStore($scope.addStoreForm)
      .then((data)=>{
        if(data.status === 200){
          $state.go('stores')
        }
        else{
         toastr.error('Invalid data!!!');
        }
      })
  };

}]);
