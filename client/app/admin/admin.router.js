'use strict';

angular.module('libraryManagementApp.admin')
  .config(function($stateProvider) {
    $stateProvider

    .state('admin', {
      url: '/',
      abstract: true,
      template: '<ui-view />',
      authenticate: 'admin'
    }) 
    .state('admin.addBook', {
      url: 'addBook',
      templateUrl: 'app/admin/book/book.html',
      controller: 'AddBookController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    .state('admin.viewBook', {
      url: 'viewBook',
      templateUrl: 'app/admin/book/viewBook.html',
      controller: 'ViewBookController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    .state('admin.editBook', {
      url: 'editBook/:id',
      templateUrl: 'app/admin/book/editBook.html',
      controller: 'EditBookController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    .state('admin.addMember', {
      url: 'addMember',
      templateUrl: 'app/admin/member/member.html',
      controller: 'AddMemberController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    .state('admin.viewMember', {
      url: 'viewMember',
      templateUrl: 'app/admin/member/viewMember.html',
      controller: 'ViewMemberController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    .state('admin.editMember', {
      url: 'editMember/:id',
      templateUrl: 'app/admin/member/editMember.html',
      controller: 'EditMemberController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    .state('admin.addLibrary_transaction', {
      url: 'addLibrary_transaction',
      templateUrl: 'app/admin/library_transaction/library_transaction.html',
      controller: 'AddLibrary_transactionController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    .state('admin.viewLibrary_transaction', {
      url: 'viewLibrary_transaction',
      templateUrl: 'app/admin/library_transaction/viewLibrary_transaction.html',
      controller: 'ViewLibrary_transactionController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    .state('admin.editLibrary_transaction', {
      url: 'editLibrary_transaction',
      templateUrl: 'app/admin/library_transaction/editLibrary_transaction.html',
      controller: 'EditLibrary_transactionController',
      controllerAs: 'vm',
      authenticate: 'admin'
    })
    ;
  });
