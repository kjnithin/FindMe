app.controller('loginController',['$scope','userFactory','$state','$rootScope','toastr','$localStorage',function($scope,userFactory,$state,$rootScope,toastr,$localStorage){

  $scope.loginIcon =true;
  $scope.loginForm = {};

  $scope.loginUser = () =>{
    userFactory.login($scope.loginForm)
    .then((obj)=>{
      if(obj.status === 200){
        $localStorage.userdata = obj.data;
        $state.go('stores');
        $scope.loginIcon = false;
      }
      else{
        toastr.error('Error !!! Please try');
      }
    })
  }

  $scope.auth = {};
  $scope.signWithGoogle = function () {
       var params = {
           'clientid': '75087466487-6ij85f507k5f4ucru1tfg1mugjs6bkhh.apps.googleusercontent.com',
           'cookiepolicy': 'single_host_origin',
           'callback': function (result) {
               if (result['status']['signed_in']) {
                   var request = gapi.client.plus.people.get(
                       {
                           'userId': 'me'
                       }
                   );
                   request.execute(function (res) {
                       $scope.email = res.emails[0].value;
                       $scope.auth = {email: $scope.email};
                       userFactory.googleAuth($scope.auth)
                           .then(function (response) {
                             if(response.status === 200){
                               $localStorage.userdata = response.data;
                               $state.go('stores');
                               toastr.success('Successfully Authenitcated');
                             }
                             else{
                               toastr.error('Invalid Credentials');
                             }
                           },function (error) {
                                    toastr.error('Something is wrong please try again');
                                  });
                   });
               }
           },
           'approvalprompt': 'force',
           'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
       };

       gapi.auth.signIn(params);
   };
}])
