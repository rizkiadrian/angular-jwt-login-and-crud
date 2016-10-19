// public/scripts/userController.js

(function() {

'use strict';

angular
.module('authApp')
.controller('MahasiswaController', MahasiswaController);  

function MahasiswaController($http,$state,$auth) {

var vm = this;
vm.main = {
                page: 1
                
            };


/* The -R- part */
$http.get('http://localhost:8000/api/mahasiswa?page=' + vm.main.page).success(function(data){
// users from your api
vm.main.mahasiswas = data.data;
// number of pages of users
vm.main.pages = data.to;
});
vm.PageLoad = function (){
$http.get('http://localhost:8000/api/mahasiswa?page=' + vm.main.page).success(function(data){
// users from your api
vm.main.mahasiswas = data.data;
// number of pages of users
vm.main.pages = data.to;
});
};


vm.nextPage = function() {
if (vm.main.page < vm.main.pages) {
vm.main.page++;
vm.PageLoad();
}
};
vm.previousPage = function() {
if (vm.main.page > 1) {
vm.main.page--;
vm.PageLoad();
}
};
/* End of the -R- part */

/* Create and update function*/
vm.Savedata = function(modalstate,id){
switch(modalstate){
case 'add': var url = "http://localhost:8000/api/mahasiswa"; var method = "POST"; 
break;
case 'edit': var url = "http://localhost:8000/api/mahasiswa/"+id; var method = "PUT"; break;
default: break;
}
$http({
method  : method,
url     : url,
data    : $.param(vm.formData),  // pass in data as strings
headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
}).
success(function(response){
$('#myModal').modal('hide');
vm.PageLoad();
}).
error(function(response){
alert('Incomplete Form');
});

}; 
/* end of create and update function */ 
/* Show the modal */
vm.toggle = function(modalstate,id) {
vm.modalstate = modalstate;
switch(modalstate){
case 'add':
vm.state = "Add New User";
vm.id = 0;
vm.Nama = '';
vm.email = '';
vm.NRP = '';
vm.formData = '';
break;
case 'edit':
vm.state = "User Detail";
vm.id = id;
$http.get("http://localhost:8000/api/mahasiswa/" + id)
.success(function(response) {
console.log(response);
vm.formData = response;
});
break;
default: break;
}
$('#myModal').modal('show');
};

/* The -D- Part */
vm.confirmDelete = function(id){
$http({
method: 'DELETE',
url: 'http://localhost:8000/api/mahasiswa/' + id,
data: {
id:id
},
headers: {
'Content-type': 'application/json;charset =utf-8'
}
})
.then(function(response) {
vm.PageLoad();
}, function(rejection) {
alert('delete fail');
});
};
/* End of the -D- Part */



vm.refresh = function(){
$http.get("http://localhost:8000/api/mahasiswa")
.success(function(response){
vm.mahasiswas = response;
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