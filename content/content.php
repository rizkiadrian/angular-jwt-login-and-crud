
    <!DOCTYPE html>
    <html>
    <head>
    <title>CRUD WITH ANGULAR</title>
    <!-- Load Bootstrap CSS -->
   <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
    <div ng-app="myApp" ng-controller="usersCtrl">
    <!-- There will be a table, to dispay the data, here -->
   <table class="table" >
   <thead>
   <tr>
   <th>ID</th>
   <th>NRP</th>
   <th>Nama</th>
   <th>Email</th>
   <th>Date Created</th>
   <th><button id="btn-add" class="btn btn-primary btn-xs" ng-click="toggle('add',0)">Add New User</button></th>
   </tr>
   </thead>
   <tbody ng-repeat="mahasiswa in mahasiswas">
   <tr ng-repeat="person in mahasiswa">
   <td>{{ person.id}}</td>
   <td>{{ person.NRP }}</td>
   <td>{{ person.Nama }}</td>
   <td>{{ person.email }}</td>
   <td>{{ person.created_at }}</td>
   <td>
   <button class="btn btn-default btn-xs btn-detail" ng-click="toggle('edit',person.id)">Edit</button>
   <button class="btn btn-danger btn-xs btn-delete" ng-click="confirmDelete(person.id)">Delete</button>
   </td>
   </tr>
   </tbody>
   </table>
<!-- End of Table-to-load-the-data Part -->
    <!-- There will be a modal to pop-up a Form (One form used as a create and edit form) -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title" id="myModalLabel">{{state}}</h4>
    </div>
    <div class="modal-body">
    <form class="form-horizontal" name="MyForm">
    <div class="form-group">
    <label for="inputEmail3" class="col-sm-3 control-label">NRP</label>
    <div class="col-sm-9">
    <input type="text" class="form-control" name="inputNRP" placeholder="Your NRP" value="{{NRP}}" ng-model="formData.NRP">
    <p>{{MyForm.inputNRP.$valid}}<p>
    </div>
    </div>

    <div class="form-group">
    <label for="inputEmail3" class="col-sm-3 control-label">Nama</label>
    <div class="col-sm-9">
    <input type="text" class="form-control" id="inputEmail3" placeholder="Nama" value="{{Nama}}" ng-model="formData.Nama">
    </div>
    </div>

    <div class="form-group">
    <label for="inputEmail3" class="col-sm-3 control-label">Email</label>
    <div class="col-sm-9">
    <input type="text" class="form-control" id="inputEmail3" placeholder="your email here" value="{{email}}" ng-model="formData.email">
    </div>
    </div>
    </form>
    </div>
    <div class="modal-footer">
    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary" id="btn-save" ng-click="save(modalstate,id)">Save changes</button>
    </div>
    </div>
    </div>
    </div>
    <!-- End of Modal -->
    </div>
    <!-- Load Javascript Libraries (AngularJS, JQuery, Bootstrap) -->
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <!-- There will be our javascript Application here -->
    <script src = "controller/getapi.js"></script>
    </body>

    </html>
    
