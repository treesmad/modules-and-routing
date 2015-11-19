var app = angular.module('aMod', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: 'views/view1.html',
    controller: 'aController'
  });

  $routeProvider.when('/view2',{
    templateUrl: 'views/view2.html',
    controller: 'aController'
  });

  $routeProvider.when('/view3',{
    templateUrl: 'views/view3.html',
    controller: 'aController'
  });

  $routeProvider.when('/error404',{
    templateUrl: 'views/error404.html',
    controller: 'aController'
  });

  $routeProvider.otherwise({
    redirectTo: '/error404'
  });
});



app.controller('aController', function(){

  });
