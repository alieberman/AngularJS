'use strict';

/* Controllers */

var orderControllers = angular.module('orderControllers', []);

orderControllers.controller('orderCtrl', ['$scope', 'Order', 
    function($scope, Order) {
	  $scope.orders = Order.query();
  }]);
  






    