// public/scripts/userController.js

(function() {

'use strict';

angular
.module('authApp')
.controller('UserController', UserController);

function navbar(){


} 

function UserController($http,$state,$auth) {

var vm = this;
$http.get('http://localhost:8000/api/getid/').success(function(person) {
vm.person = person;
console.log(person.email);
}).error(function(error) {
vm.error = error;
});

vm.getId = function(){
$http.get('http://localhost:8000/api/getid/').success(function(person) {
vm.person = person;
console.log(person.email);
}).error(function(error) {
vm.error = error;
});
};

vm.getUsers = function() {
// This request will hit the index method in the AuthenticateController
// on the Laravel side and will return the list of users
$http.get('http://localhost:8000/api/authenticate/').success(function(users) {
vm.users = users;
}).error(function(error) {
vm.error = error;
});
};

vm.logout = function() {
$auth.logout();
$state.go('auth', {});
};
}

})();