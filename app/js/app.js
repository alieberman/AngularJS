'use strict';


// Declare app level module which depends on filters, and services
angular.module('orderApp', [
  'ngRoute',
  'myApp.filters',
  'orderServices',
  'orderControllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', 
    controller: 'orderCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', 
    controller: 'orderCtrl'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
