'use strict';

/* Services */

var orderServices = angular.module('orderServices', ['ngResource']);

orderServices.factory('Order', ['$resource',
  function($resource){
    return $resource('orders/orders.json', {id:'@id'}, 
	{ post: {method: 'POST'}, query: {method: 'GET', isArray: true}, update: {method:'PUT'}, get: {method:'GET'}, delete: {method: 'DELETE'} });
 
  }]);



 
