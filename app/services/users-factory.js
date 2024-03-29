userApp.factory('usersFactory', function($http) {

    var usersFactory = {
        getUsers: function() {
            // $http returns a promise, which has a then function, which also returns a promise
            var promise = $http.get('app/services/users.json').then(function(response) {
                // The then function here is an opportunity to modify the response
                // console.log(response);
                // The return value gets picked up by the then in the controller.
                return response.data;
            });
            // Return the promise to the controller
            return promise;
        }
    };
    return usersFactory;

});
