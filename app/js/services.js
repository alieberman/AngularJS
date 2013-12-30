'use strict';

/* Services */

var orderServices = angular.module('orderServices', ['ngResource', 'ngRoute']);

orderServices.factory('Order', ['$resource', '$routeParams',
  function($resource){
    return $resource('orders/orders.json', {id:'@id'}, 
	{ post: {method: 'POST'}, query: {method: 'GET', isArray: true}, update: {method:'PUT', isArray:true}, remove: {method: 'DELETE'}, get: {method:'GET', params:{id:'$routeParams.id'}} });
 
  }]);



 
