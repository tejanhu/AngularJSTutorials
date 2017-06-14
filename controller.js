var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'login.html'
    })
    .when('/dashboard', {
        templateUrl: 'dashboard.html'
    })
    
    .otherwise({
        redirectTo: '/'
    });
});

app.controller('loginCtrl', function($scope, $location){
    $scope.submit = function(){
        var uname = $scope.username;
        var password = $scope.password;
        if($scope.username == 'admin' && $scope.password == 'admin'){
            window.location.hash= '#/dashboard';
            $location.path('/dashboard');
        } else{
            alert('Wrong Stuff');
        }
    };
});