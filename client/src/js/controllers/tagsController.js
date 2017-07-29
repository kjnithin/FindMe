app.controller('tagsController', ['$scope', 'storeFactory', '$stateParams', function($scope, storeFactory, $stateParams) {

  const tag = $stateParams.tag;

  if (tag) {
    $scope.tagName = tag;
    storeFactory.getStoreByTag(tag)
      .then((data) => {
        let [tag, store] = data;
        $scope.tags = tag;
        $scope.stores = store;
      })
  } else {
    $scope.tagName = 'Tags'
    storeFactory.getTags()
      .then((data) => {
        let [tag, store] = data;
        $scope.tags = tag;
        $scope.stores = store;
      });
  }

}]);
