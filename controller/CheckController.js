(function() {

'use strict';

angular
.module('authApp')
.controller('CheckController', CheckController);


function CheckController($auth, $state) {

if($auth.isAuthenticated()){
UserController();
}

}

})();