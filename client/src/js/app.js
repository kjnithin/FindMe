var app = angular.module('findMe',[
  'ui.router',
  'toastr',
  'ngMap',
  'gm',
  'LocalStorageModule'
]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/stores');

    $stateProvider

      .state('stores',{
        url:'/stores',
        templateUrl:'views/stores.html'
      })

      .state('store',{
        url:'/store/:slug',
        templateUrl:'views/store.html'
      })

      .state('edit',{
        url:'/edit/:id',
        templateUrl:'views/edit.html'
      })

      .state('tags',{
        url:'/tags',
        templateUrl:'views/tags.html'
      })

      .state('top',{
        url:'/top',
        templateUrl:'views/top.html'
      })

      .state('add',{
        url:'/add',
        templateUrl:'views/add.html'
      })

      .state('map',{
        url:'/map',
        templateUrl:'views/map.html'
      })

      .state('register',{
        url:'/register',
        templateUrl:'views/register.html'
      })

      .state('login',{
        url:'/login',
        templateUrl:'views/login.html'
      })

}]);
