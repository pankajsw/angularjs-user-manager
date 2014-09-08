userApp.controller('usersListController', function($scope, usersFactory) {
    $scope.customers = [];

    init();

    function init() {
        usersFactory.getCustomers().then(function(data){
            $scope.customers = data.users;
            console.log($scope.customers)
        });
    }

    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        })

        //Clearing the textfields after save button click
        $scope.newCustomer.name = "";
        $scope.newCustomer.city = "";

        var customers = JSON.stringify($scope.customers);
        localStorage.setItem('customers', customers);

        // var data = JSON.parse(localStorage.getItem('customers'));
        // console.log(data);
    }

});