// public/scripts/app.js

(function() {

'use strict';

angular
.module('authApp', ['ui.router', 'satellizer','ui.bootstrap'])
.directive('navbar',navbar)
.run(function ($rootScope, $state, $auth) {
$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
if (toState.authenticate && !$auth.isAuthenticated()){
// User isn’t authenticated
alert('Youre not logged in');
$state.transitionTo("auth");
event.preventDefault(); 
}
});
})
.config(function($stateProvider, $urlRouterProvider, $authProvider) {
// Satellizer configuration that specifies which API
// route the JWT should be retrieved from
$authProvider.loginUrl = 'http://localhost:8000/api/authenticate/';

// Redirect to the auth state if any other states
// are requested other than users
$urlRouterProvider.otherwise('/auth');

$stateProvider
.state('auth', {
url: '/auth',
templateUrl: '../view/Auth.html',
controller: 'AuthController as auth'
})

.state('users', {
url: '/users',
templateUrl: '../view/User.html',
controller: 'UserController as user',
authenticate:true
})

.state('mahasiswa', {
url: '/mahasiswa',
templateUrl: '../view/indexmahasiswa.html',
controller: 'MahasiswaController as mahasiswaco',
authenticate:true

});
});

function navbar(){

	return {

        templateUrl: "../view/partial/navbar.html"

    };
}

})();


