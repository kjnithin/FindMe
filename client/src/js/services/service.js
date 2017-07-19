app.factory('storeFactory',['$http',function($http){

  const baseUrl = 'https://findplaceonline.herokuapp.com';
  // const baseUrl ='http://localhost:3000/api';
  const storeFactory = {};

  storeFactory.getStores = function(){
    return $http.get(baseUrl+'/stores')
    .then((response)=>{
      return response.data
    })
  };

  storeFactory.getStore = function(slug){
    return $http.get(baseUrl+'/store/'+slug)
    .then((response)=>{
      return response.data
    })
  };

  storeFactory.getStoreById = function(id){
    return $http.get(baseUrl+'/storebyid/'+id)
    .then((response)=>{
      return response.data
    })
  };

  storeFactory.updateStore = function(id,data){
    return $http.put(baseUrl+'/store/'+id,data)
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  }

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
