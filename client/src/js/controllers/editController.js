app.controller('editController',['$scope','$stateParams','storeFactory','$state',function($scope,$stateParams,storeFactory,$state){

    const id = $stateParams.id;

    storeFactory.getStoreById(id)
    .then((data)=>{
        $scope.editForm.name = data.name;
        $scope.editForm.description = data.description;
        $scope.editForm.address = data.location.address;
        $scope.editForm.lng = data.location.coordinates[0];
        $scope.editForm.lat = data.location.coordinates[1];

        // for( let tag of data.tags){
        //     if(ng-true-value === tag){
        //       $scope.checked = true;
        //     }
        // }
      })


    $scope.$on('gmPlacesAutocomplete::placeChanged', function(){
        let location = $scope.editForm.address.getPlace().geometry.location;
        $scope.editForm.address=$scope.editForm.address.getPlace().formatted_address;
        $scope.editForm.lng=location.lat();
        $scope.editForm.lat=location.lng();
        $scope.$apply();
    });

     $scope.editForm ={};

     $scope.editStore = ()=>{

      let tagObject = $scope.editForm.tags;
      let tag = [];
       for(key in tagObject){
         tag.push(tagObject[key]);
       }

        const editStoreForm ={
         'name':$scope.editForm.name,
         'description':$scope.editForm.description,
         'tags':tag,
         'location':{
           'coordinates':[$scope.editForm.lat,$scope.editForm.lng],
           'address':$scope.editForm.address
         }
       };

      storeFactory.updateStore(id,editStoreForm)
      .then((data)=>{
        if(data.status == 200){
          $state.go('stores');
        }
      })
    }


}]);
