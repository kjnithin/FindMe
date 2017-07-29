app.controller('registerController',['$scope','userFactory','$state','toastr','$localStorage',function($scope,userFactory,$state,toastr,$localStorage){

  $scope.registerForm = {};

  $scope.registerUser=() =>{
      userFactory.register($scope.registerForm)
      .then((obj)=>{
        if(obj.status === 200){
          $localStorage.userdata = obj.data;
          $state.go('stores')
        }
        else{
          toastr.error('Error !! Please try');
        }
      })
  }

}]);
