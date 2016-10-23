// public/scripts/userController.js

(function() {

'use strict';

angular
.module('authApp')
.controller('ImageController', ImageController)
.directive('file',file);


function file(){
return {
restrict: 'E',
template: '<input type="file" />',
replace: true,
require: 'ngModel',
link: function(scope, element, attr, ctrl) {
var listener = function() {
scope.$apply(function() {
attr.multiple ? ctrl.$setViewValue(element[0].files) : ctrl.$setViewValue(element[0].files[0]);
});
};
element.bind('change', listener);
}
};
}

function ImageController($http,$state,$auth,$scope) {

var vm = this;



/*vm.main = {return {
        scope: {
            fileread: "="
        },
        link: function (scope, element, attributes) {
            element.bind("change", function (changeEvent) {
                var reader = new FileReader();
                reader.onload = function (loadEvent) {
                    scope.$apply(function () {
                        scope.fileread = loadEvent.target.result;
                    });
                }
                reader.readAsDataURL(changeEvent.target.files[0]);
            });
        }
    }
                page: 1
                
            };
vm.mainSearch = {
                page: 1,
                search:"",
                
               

                
            };

vm.searcl = vm.mainSearch.search.length;*/


/* The -R- part */
$http.get('http://localhost:8000/api/images').success(function(data){
// image data from your api
vm.datas = data;
// number of pages of users
// vm.main.pages = data.to;
});

vm.PageLoad = function (){
vm.searcl = vm.mainSearch.search.length;
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
if(vm.mainSearch.search !== ""){
vm.PageLoadSearch();
}
else{
vm.PageLoad();
}
}
};
vm.previousPage = function() {
if (vm.main.page > 1) {
vm.main.page--;
if(vm.mainSearch.search !== ""){
vm.PageLoadSearch();
}
else{
vm.PageLoad();
}
}
};
/* End of the -R- part */

/*search part*/
vm.PageLoadSearch = function (){
vm.searcl = vm.mainSearch.search.length;
vm.mainSearch.search = vm.search;
$http.get('http://localhost:8000/api/mahasiswa?page=' + vm.main.page+'&search='+vm.mainSearch.search).success(function(data){
// users from your api
vm.main.mahasiswas = data.data;
// number of pages of users
vm.main.pages = data.to;
});
};


/* Create and update function*/
vm.Savedata = function(modalstate,id){

vm.blobFile  = vm.formData.image;
vm.formDatas = new FormData();
vm.formDatas.append("image", vm.blobFile);
vm.formDatas.append("author", vm.formData.author);
vm.formDatas.append("image_description", vm.formData.image_description);
$http({
method:"POST",
url :"http://localhost:8000/api/images",
data:vm.formDatas,
transformRequest: angular.identity,
headers : { 'Content-Type': undefined }, // pass in data as strings
}).
success(function(response){
$('#myModal').modal('hide');
vm.refresh();

}).
error(function(response){
alert('Incomplete Form');
});

}; 
/* end of create function */ 


/* Show the create modal */
vm.toggle = function() {
vm.state = "Add New Image";
vm.id = 0;
vm.author = '';
vm.image_description = '';
vm.image = '';
vm.formData = '';
$('#myModal').modal('show');
};

/* Create and update function*/
vm.Editdata = function(id){
$http({
method  : "PUT",
url     : "http://localhost:8000/api/images/"+id,
data    : $.param(vm.formData),  // pass in data as strings
headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
}).
success(function(response){
$('#myModalE').modal('hide');
vm.refresh();
}).
error(function(response){
alert('Incomplete Form');
});

}; 
/* end of create and update function */ 

/* Show the edit modal */
vm.toggleedit = function(id) {
vm.state = "Update";
vm.id = id;
$http.get("http://localhost:8000/api/images/" + id)
.success(function(response) {
console.log(response);
vm.formData = response;
$('#myModalE').modal('show');
});
};

/* The -D- Part */
vm.confirmDelete = function(id){
var answer = confirm("Delete data?");
if(answer){
$http({
method: 'DELETE',
url: 'http://localhost:8000/api/images/' + id,
data: {
id:id
},
headers: {
'Content-type': 'application/json;charset =utf-8'
}
})
.success(function(response) {
vm.refresh();
}, function(rejection) {
alert('delete fail');
});
}
else{
vm.refresh();
}
};
/* End of the -D- Part */



vm.refresh = function(){
$http.get("http://localhost:8000/api/images")
.success(function(response){
vm.datas = response;
});
};

vm.imagemodal = function(name,filetype,caption){
// Get the modal
var modal = document.getElementById('ShowModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
modal.style.display = "block";
modalImg.src = "http://localhost:8000/api/imagor/"+name+"."+filetype;
captionText.innerHTML = caption;
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
 modal.style.display = "none";
};


};




}

})();