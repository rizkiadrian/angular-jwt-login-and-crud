// public/scripts/userController.js

(function() {

    'use strict';

    angular
        .module('authApp')
        .controller('UserController', UserController);  

    function UserController($http) {
         
        var vm = this;
        vm.person;
        vm.users;
        vm.error;
        
         
        $http.get('http://localhost:8000/api/getid/').success(function(person) {
                vm.person = person;
            }).error(function(error) {
                vm.error = error;
            });
        
       
        
        vm.getUsers = function() {

            // This request will hit the index method in the AuthenticateController
            // on the Laravel side and will return the list of users
            $http.get('http://localhost:8000/api/authenticate/').success(function(users) {
                vm.users = users;
            }).error(function(error) {
                vm.error = error;
            });
        };
    }
    
})();