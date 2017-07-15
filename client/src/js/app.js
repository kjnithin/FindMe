var app = angular.module('findMe',[
  'ui.router'

]);

app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/stores');

    $stateProvider

      .state('stores',{
        url:'/stores',
        templateUrl:'views/stores.html'
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
