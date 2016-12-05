'use strict';

angular.module('libraryManagementApp', ['libraryManagementApp.auth', 'libraryManagementApp.admin',
    'libraryManagementApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
