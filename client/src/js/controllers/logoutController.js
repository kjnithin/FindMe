app.controller('logoutController',['$scope','userFactory','toastr','$state','$stateParams','$window',function($scope,userFactory,toastr,$state,$stateParams,$window){

  $scope.logout=()=>{
    userFactory.logout()
    .then((data)=>{
      if(data.status === 200){
        $window.localStorage.clear();
        $window.location.reload();
        $state.go('login');
        toastr.success('Successfully logged out!!');
      }else{
        toastr.error('Something went wrong!!');
      }
    })
  }
}]);
