'use strict';
angular.module('hrApp', ['ui.router','ngResource'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url:'/',
                views: {
                    'logo': {
                        templateUrl : 'views/logo.html'
//                        controller: 'SomeController'
                    },
                    'menu': {
                        templateUrl : 'views/menu.html'
                    }
                }
            });
            $urlRouterProvider.otherwise('/');

//                    // route for the aboutus page
//            .state('app.aboutus', {
//                url:'aboutus',
//                views: {
//                    'content@': {
//                        template: '<h1>To be Completed</h1>',
//                        controller: 'indexController'
//                   }
//                }
//            });
    }])


;