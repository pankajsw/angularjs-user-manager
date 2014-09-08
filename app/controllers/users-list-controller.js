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

        //Clearing the textfields after save button click
        $scope.newCustomer.name = "";
        $scope.newCustomer.city = "";

        var customers = JSON.stringify($scope.customers);
        localStorage.setItem('customers', customers);

        // var data = JSON.parse(localStorage.getItem('customers'));
        // console.log(data);
    }

});