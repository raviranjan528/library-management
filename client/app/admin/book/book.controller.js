(function (angular) {
	
	'use strict';

	angular
		.module('libraryManagementApp')
		.controller('AddBookController', AddBookController)

		AddBookController.$inject = ['$state', 'BookService'];

		function AddBookController($state, BookService) {
			var vm = this;

			vm.SaveBookDetails = function () {

	            var bookData = {
	                bookname:             vm.user.bookname,
	                bookAuthor:       	  vm.user.bookAuthor,
	                bookAvailability:     vm.user.bookAvailability
	            };

	            console.log('Hello bookData data' + JSON.stringify(bookData));


	            BookService.addBookInfo(bookData).then(function success(data){
	                //console.log('Donate Data:  ' + JSON.stringify(data));
	                vm.donation = data;
	                $state.go('admin.viewBook', {}, {reload:true});
	                /*Notification.success({
	                    message: 'Donate successfully!', 
	                    title: 'Success'
	                });*/
	            }, function error(msg){
	                //Notification.error({message: msg, title: 'Error on Donation'});
	            });
	        };

		}

}(window.angular));