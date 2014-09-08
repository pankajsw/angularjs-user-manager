userApp.controller('usersListController', function($scope, usersFactory) {

    //If customers exists in localStorage then intialize $scope.customers with that data.
    $scope.customers = JSON.parse(localStorage.getItem('customers'));

    init();

    function init() {
        //If customers does not exists in localStorage then intialize $scope.customers with JSON data from file.
        if($scope.customers === null){
            usersFactory.getCustomers().then(function(data){
                $scope.customers = data.users;
            });
        }    
    }

    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })

        //Clearing the textfields after save button click
        $scope.newCustomer.name = "";
        $scope.newCustomer.city = "";

        console.log($scope.customers);

        var customers = JSON.stringify($scope.customers);
        localStorage.setItem('customers', customers);

    }

});