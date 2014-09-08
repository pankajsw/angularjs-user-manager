userApp.controller('usersListController', function($scope, usersFactory) {

    //If users exists in localStorage then intialize $scope.users with that data.
    $scope.users = JSON.parse(localStorage.getItem('users'));

    init();

    function init() {
        //If users does not exists in localStorage then intialize $scope.users with JSON data from file.
        if($scope.users === null){
            usersFactory.getUsers().then(function(data){
                $scope.users = data.users;
            });
        }    
    }

    $scope.addUser = function() {
        $scope.users.push({
            name: $scope.newUser.name,
            city: $scope.newUser.city
        })

        //Clearing the textfields after save button click
        $scope.newUser.name = "";
        $scope.newUser.city = "";

        var users = JSON.stringify($scope.users);
        localStorage.setItem('users', users);

    }

});