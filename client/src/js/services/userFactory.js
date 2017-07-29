app.factory('userFactory',['$http',function($http){

  // const baseUrl = 'https://findplaceonline.herokuapp.com/';
  const baseUrl ='http://localhost:3000/api';
  const userFactory = {};

  userFactory.register = function(user){
    return $http.post(baseUrl+'api/register',user)
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  };

  userFactory.login = function(user){
    return $http.post(baseUrl+'api/login',user)
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  }

  userFactory.logout = function(){
    return $http.get(baseUrl+'api/logout')
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  }

  userFactory.updateAccount = function(id,user){
    return $http.put(baseUrl+'api/user/update/'+id,user)
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  }

  userFactory.googleAuth = function(email){
    return $http.post(baseUrl+'api/auth',email)
    .then((response)=>{
      return response
    },(error)=>{
      return error
    })
  }

  return userFactory;

}]);
