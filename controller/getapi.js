
var app = angular.module('myApp', []);

app.controller('usersCtrl', function($scope, $http) {

/* The -R- part */
$http.get("http://localhost:8000/api/mahasiswa").success(function(response) {
$scope.mahasiswas = response;
console.log($scope.mahasiswas);
});
/* End of the -R- part */

/* The -C- and -U- part */
$scope.save = function(modalstate,mahasiswa_id){
switch(modalstate){
case 'add': var url = "http://localhost:8000/api/mahasiswa"; var method = "POST"; break;
case 'edit': var url = "http://localhost:8000/api/mahasiswa/"+mahasiswa_id; var method = "PUT"; break;
default: break;
}

$http({
method  : method,
url     : url,
data    : $.param($scope.formData),  // pass in data as strings
headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
}).
success(function(response){
location.reload();
}).
error(function(response){
console.log(response);
alert('Incomplete Form');
});
};
/* End of the -C- and -U- part */

/* The -D- Part */
$scope.confirmDelete = function(id){
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
location.reload();
}, function(rejection) {
alert('delete fail');
});
};
/* End of the -D- Part */

/* Show the modal */
$scope.toggle = function(modalstate,id) {
$scope.modalstate = modalstate;
switch(modalstate){
case 'add':
$scope.state = "Add New User";
$scope.id = 0;
$scope.Nama = '';
$scope.email = '';
$scope.NRP = '';
break;
case 'edit':
$scope.state = "User Detail";
$scope.id = id;
$http.get("http://localhost:8000/api/mahasiswa/" + id)
.success(function(response) {
console.log(response);
$scope.formData = response;
});
break;
default: break;
}

//console.log(id);
$('#myModal').modal('show');
};
});
