app.factory('storeFactory',['$http',function($http){

  const baseUrl = 'https://findplaceonline.herokuapp.com';
  // const baseUrl ='http://localhost:3000';
  const storeFactory = {};

  storeFactory.getStores = function(){
    return $http.get(baseUrl+'/stores')
    .then((response)=>{
      return response.data
    })
  };

  // storeFactory.getStore = function(slug){
  //   return $http.get(baseUrl+'/store/'+slug)
  //   .then((response)=>{
  //     return response.data
  //   })
  // };

  storeFactory.createStore = function(store){
    return $http.post(baseUrl+'/createStore',store)
    .then((response)=>{
      return response
    },(error)=>{
      return error
    })
  };

  return storeFactory;

}]);
