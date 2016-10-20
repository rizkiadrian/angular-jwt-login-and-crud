// public/scripts/authController.js

(function() {

'use strict';

angular
.module('authApp')
.controller('AuthController', AuthController);


function AuthController($auth, $state,$http) {

var vm = this;

vm.login = function() {

var credentials = {
email: vm.email,
password: vm.password
};

// Use Satellizer's $auth service to login
$auth.login(credentials).then(function(data) {
// If login is successful, redirect to the users state
$state.go('users', {});
})
.catch(function(response) {
    alert('Invalid username password');
  });
};

vm.getid = function(){
$http.get('http://localhost:8000/api/getid/').success(function(person) {
vm.person = person;
console.log(person.email);
}).error(function(error) {
vm.error = error;
});
};

}


})();