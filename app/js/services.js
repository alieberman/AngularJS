'use strict';

/* Services */

var orderServices = angular.module('orderServices', ['ngResource']);

orderServices.factory('Order', ['$resource',
  function($resource){
    return $resource('orders/orders.json', {}, {
      query: {method:'GET', isArray:true}
    });
  	var newOrders = orderServices.query(function() {
		var newOrder = new orderServices();
		newOrder.id = 5
		newOrder.name = "Dan";
		newOrder.quantity = 8;
		newOrder.$save;
	});
  }]);



 
