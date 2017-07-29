app.factory('userFactory',['$http',function($http){

  const baseUrl = 'https://findplaceonline.herokuapp.com/api';
  // const baseUrl ='http://localhost:3000/api';
  const userFactory = {};

  userFactory.register = function(user){
    return $http.post(baseUrl+'/register',user)
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  };

  userFactory.login = function(user){
    return $http.post(baseUrl+'/login',user)
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  }

  userFactory.logout = function(){
    return $http.get(baseUrl+'/logout')
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  }

  userFactory.updateAccount = function(id,user){
    return $http.put(baseUrl+'/user/update/'+id,user)
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  }

  userFactory.googleAuth = function(email){
    return $http.post(baseUrl+'/auth',email)
    .then((response)=>{
      return response
    },(error)=>{
      return error
    })
  }

  return userFactory;

}]);
