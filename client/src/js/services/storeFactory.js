app.factory('storeFactory',['$http',function($http){

  const baseUrl = 'https://findplaceonline.herokuapp.com/';
  // const baseUrl ='http://localhost:3000/';
  const storeFactory = {};

  storeFactory.getStores = function(){
    return $http.get(baseUrl+'api/stores')
    .then((response)=>{
      return response.data
    })
  };

  storeFactory.getStore = function(slug){
    return $http.get(baseUrl+'api/store/'+slug)
    .then((response)=>{
      return response.data
    })
  };

  storeFactory.getStoreById = function(id){
    return $http.get(baseUrl+'api/storebyid/'+id)
    .then((response)=>{
      return response.data
    })
  };

  storeFactory.updateStore = function(id,data){
    return $http.put(baseUrl+'api/store/'+id,data)
    .then((response)=>{
      return response
    },(error) =>{
      return error
    })
  }

  storeFactory.createStore = function(store){
    return $http.post(baseUrl+'api/createStore',store)
    .then((response)=>{
      return response
    },(error)=>{
      return error
    })
  };

  storeFactory.getTags = function(){
    return $http.get(baseUrl+'api/tags')
    .then((response)=>{
      return response.data
    },(error)=>{
      return error
    })
  };

  storeFactory.getStoreByTag = function(tag){
    return $http.get(baseUrl+'api/tags/'+tag)
    .then((response)=>{
      return response.data
    },(error)=>{
      return error
    })
  }

  return storeFactory;

}]);
