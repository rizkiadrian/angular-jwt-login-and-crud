<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Angular-Laravel Authentication</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body ng-app="authApp">

<div class="container">
<div ui-view></div>
</div>        

</body>

<!-- Application Dependencies -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="//unpkg.com/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="https://cdn.jsdelivr.net/satellizer/0.15.5/satellizer.min.js"></script>

<!-- Application Scripts -->
<script src="controller/app.js"></script>
<script src="controller/authController.js"></script>
<script src="controller/userController.js"></script>
</html>