'use strict';

angular.module('libraryManagementApp.auth', ['libraryManagementApp.constants',
    'libraryManagementApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
