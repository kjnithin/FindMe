app.controller('storesController', ['$scope', 'storeFactory', '$localStorage', function($scope, storeFactory, $localStorage) {

  const userdata = $localStorage.userdata;

  if (!userdata) {
    $scope.hideEdit = true;
  }

  storeFactory.getStores()
    .then((data) => {
      if (data.length > 0) {
        $scope.stores = data;
      } else {
        $scope.noStores = true;
      }
    });

}]);
