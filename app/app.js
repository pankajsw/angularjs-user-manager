var userApp = angular.module('userApp', ['ngRoute']);

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
