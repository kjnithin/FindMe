app.controller('addController',['$scope','storeFactory','$state','toastr','$localStorage','$rootScope','Upload',function($scope,storeFactory,$state,toastr,$localStorage,$rootScope,Upload){

  $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
      let location = $scope.addForm.address.getPlace().geometry.location;
      $scope.addForm.address=$scope.addForm.address.getPlace().formatted_address;
      $scope.addForm.lng=location.lat();
      $scope.addForm.lat=location.lng();
      $scope.$apply();
  });


  const userData = $localStorage.userdata;

  if(!userData){
    toastr.error("Please Login");
    $state.go('login');
  }

  $scope.addForm ={};

  $scope.addStore = ()=>{
    let tagObject = $scope.addForm.tags;
    let tag = [];
     for(key in tagObject){
       tag.push(tagObject[key]);
     }

     const addStoreForm ={
       'name':$scope.addForm.name,
       'description':$scope.addForm.description,
       'tags':tag,
       'location':{
         'coordinates':[$scope.addForm.lat,$scope.addForm.lng],
         'address':$scope.addForm.address
       },
       'owner':userData._id
     };

     storeFactory.createStore(addStoreForm)
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
