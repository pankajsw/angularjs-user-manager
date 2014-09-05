var userApp = angular.module('userApp', ['ngRoute']);

userApp.factory('usersFactory', function() {
    var customers = [{
        name: 'Dave Jones',
        city: 'Phoenix'
    }, {
        name: 'Jamie Riley',
        city: 'Atlanta'
    }, {
        name: 'Heedy Whalin',
        city: 'Chandler'
    }, {
        name: 'Thomas Winter',
        city: 'Seattle'
    }];

    var factory = {};
    factory.getCustomers = function() {
        return customers;
    }
    factory.postCustomers = function() {

    }

    return factory;
});

userApp.controller('usersListController', function($scope, usersFactory) {
    $scope.customers = [];

    init();

    function init() {
        $scope.customers = usersFactory.getCustomers();
    }

    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })

        var customers = JSON.stringify($scope.customers);
        localStorage.setItem('customers', customers);

        // var data = JSON.parse(localStorage.getItem('customers'));
        // console.log(data);
  	}

});

userApp.config(function($routeProvider) {

    $routeProvider.when('/users-list', {
        controller: 'usersListController',
        templateUrl: 'app/views/users-list.html'
    }).when('/add-user', {
        controller: 'usersListController',
        templateUrl: 'app/views/user-add.html'
    }).otherwise({
        redirectTo: '/users-list'
    });

});
