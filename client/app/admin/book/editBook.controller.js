(function (angular) {
	
	'use strict';

	angular
		.module('libraryManagementApp')
		.controller('EditBookController', EditBookController)

		EditBookController.$inject = ['$state', 'BookService'];

		function EditBookController($state, BookService) {
			var vm = this;

			var bookID = $state.params.id;

			// Get cities by state Id  
			BookService.getBookInfobyId(bookID).then(function success(data){
				console.log('City data :  ' + JSON.stringify(data));
				vm.book = data;
			},function error(msg) {
				console.log('state error data :  ' + JSON.stringify(msg));
				// Notification.error({
				// 	message: msg.statusText
				// });
			});

		// Update City Data 
		vm.updateBook = function () {

        	console.log('Update City : ' + vm.book.bookName);  

        	var bookUpdateData = {
        		bookname   : vm.book.bookname
        	} 

        	BookService.updateBookInfo(bookUpdateData, bookID).then(function success(data) {
        		// Notification.success({
        		// 	message : 'City Updated !'
        		// })
        	},function error(msg) {
        		console.log('Error Message :' + JSON.stringify(msg));
        		// Notification.error({
        		// 	message  : msg.statusText
        		// });
        	});
        }

		}

}(window.angular));