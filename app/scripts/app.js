'use strict';

angular.module('sampleApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider

            // route for the home page
            .state('app', {
                url:'/',
                 views: {
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'contactController'
                    }
                 }

            });
        $urlRouterProvider.otherwise('/');
    });

