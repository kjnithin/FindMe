app.controller('accountController',['$scope','$localStorage','userFactory','toastr','$state',function($scope,$localStorage,userFactory,toastr,$state){
    $scope.hideAccount = true;

    const user = $localStorage.userdata;
    if(user){
      $scope.accountEmail = $localStorage.userdata.email;
      $scope.updateForm =  user ;
      $scope.hideAccount = false;
    }


    $scope.accountForm = {};

    $scope.editAccount = () =>{
      ;
      const updateAccount = {
        email : $scope.updateForm.email,
        name : $scope.updateForm.name
      };

      userFactory.updateAccount(user._id,updateAccount)
      .then((obj) =>{
        if(obj.status === 200){
          toastr.success('Account updated successfully');
          $state.go('login');
        }else{
          toastr.error('Something went wrong!!!');
        }
      })
    };

}])
