<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Application Web</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body ng-app="authApp">
<div class="container">
<div ui-view></div>
</div>        
</body>

<!-- Application Dependencies -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
<script src="//unpkg.com/angular-ui-router/release/angular-ui-router.min.js"></script>
<script src="https://cdn.jsdelivr.net/satellizer/0.15.5/satellizer.min.js"></script>
<script src=https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.2.0/ui-bootstrap-tpls.min.js></script>
 <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twbs-pagination/1.3.1/jquery.twbsPagination.min.js"></script>

<!-- Application Scripts -->
<script src="controller/app.js"></script>
<script src="controller/authController.js"></script>
<script src="controller/userController.js"></script>
<script src="controller/MahasiswaController.js"></script>
</html>