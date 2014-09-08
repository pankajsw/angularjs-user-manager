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