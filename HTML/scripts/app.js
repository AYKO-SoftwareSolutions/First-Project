'use strict';

// declare modules
angular.module('login', []);


angular.module('Login', [
    'ngRoute'
])
 
.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/Login/views/LoginForm.html',
            hideMenus: true
        })
 
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/Login/views/LoginForm.html'
        })
 
        .otherwise({ redirectTo: '/login' });
}])