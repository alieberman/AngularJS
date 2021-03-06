'use strict';


// Declare app level module which depends on filters, and services
angular.module('orderApp', [
  'ngRoute',
  'myApp.filters',
  'orderServices',
  'order'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', 
    controller: 'orderCtrl'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', 
    controller: 'orderCtrl'});
  $routeProvider.when('/orders/:id', {templateUrl: 'partials/show.html', 
	controller: 'orderShowCtrl'});
  $routeProvider.when('/orders/edit/:id', {templateUrl: 'partials/edit.html', 
    controller: 'orderEditCtrl'});
  $routeProvider.when('/order/new', {templateUrl: 'partials/new.html', 
	controller: 'orderNewCtrl'});
  $routeProvider.otherwise({redirectTo: '/view2'});
}]);
