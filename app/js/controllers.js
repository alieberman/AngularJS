'use strict';

/* Controllers */

var orderControllers = angular.module('order', ['ngResource', 'ngRoute']);

orderControllers.controller('orderCtrl', ['$scope', 'Order', '$location',
    function($scope, Order, $location) {
	  $scope.orders = Order.query();
	  $scope.destroy = function(order) {
      Order.remove(order);
      $location.path('/view2');
      };
  }]);
  

orderControllers.controller('orderShowCtrl', ['$scope', 'Order', '$routeParams',
    function($scope, Order, $routeParams) {
	  $scope.params = $routeParams;
	  var singleOrder = Order.query({ id : $routeParams.id });
	  $scope.singleOrder = singleOrder;
	  $scope.destroy = function(order) {
      Order.remove({id:$routeParams.id});
      //$location.path('/view2');
      };
  }]);

orderControllers.controller('orderEditCtrl', ['$scope', 'Order', '$routeParams',
    function($scope, Order, $routeParams) {
	  $scope.order = Order.query({ id:$routeParams.id });
	  $scope.params = $routeParams;
	$scope.destroy = function(order) {
      Order.remove({ id:$routeParams.id }, order);
      //$location.path('/view2');
    };
    $scope.update = function(order) {
	    Order.update({ id:$routeParams.id }, order);	
	};
  }]);

orderControllers.controller('orderNewCtrl', ['$scope', 'Order',
    function($scope, Order) {
	$scope.order = Order.query();
	  $scope.save = function(order) {
		//$scope.order.push({id:this.id, name:this.name, quantity:this.quantity})
	    Order.post({id:$scope.order.id}, order);	
	  };
  }]);





/*angular.module('project', ['ngRoute', 'firebase'])

.value('fbURL', 'https://angularjs-projects.firebaseio.com/')

.factory('Projects', function($firebase, fbURL) {
  return $firebase(new Firebase(fbURL));
})

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      controller:'ListCtrl',
      templateUrl:'list.html'
    })
    .when('/edit/:projectId', {
      controller:'EditCtrl',
      templateUrl:'detail.html'
    })
    .when('/new', {
      controller:'CreateCtrl',
      templateUrl:'detail.html'
    })
    .otherwise({
      redirectTo:'/'
    });
})

.controller('ListCtrl', function($scope, Projects) {
  $scope.projects = Projects;
})

.controller('CreateCtrl', function($scope, $location, $timeout, Projects) {
  $scope.save = function() {
    Projects.$add($scope.project, function() {
      $timeout(function() { $location.path('/'); });
    });
  };
})

.controller('EditCtrl',
  function($scope, $location, $routeParams, $firebase, fbURL) {
    var projectUrl = fbURL + $routeParams.projectId;
    $scope.project = $firebase(new Firebase(projectUrl));

    $scope.destroy = function() {
      $scope.project.$remove();
      $location.path('/');
    };

    $scope.save = function() {
      $scope.project.$save();
      $location.path('/');
    };
});


*/

    