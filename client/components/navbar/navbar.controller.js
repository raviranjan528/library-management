'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Book',
    'state': 'admin.viewBook'
  },{
    'title': 'Member',
    'state': 'admin.viewMember'
  },{
    'title': 'Library Transaction',
    'state': 'admin.viewLibrary_transaction'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('libraryManagementApp')
  .controller('NavbarController', NavbarController);
