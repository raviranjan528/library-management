(function (angular) {
	
	'use strict';

	angular
		.module('libraryManagementApp')
		.controller('ViewBookController', ViewBookController)

		ViewBookController.$inject = ['$state', 'BookService'];

		function ViewBookController($state, BookService) {
			var vm = this;

			// Get All Data
        BookService.getBookInfo().then(function success(data) {
            vm.bookData = data;
        }, function error(msg) {
           console.log('Campaign Error: ' + msg);
        });

		}

}(window.angular));