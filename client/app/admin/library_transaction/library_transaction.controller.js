(function (angular) {
	
	'use strict';

	angular
		.module('libraryManagementApp')
		.controller('AddLibrary_transactionController', AddLibrary_transactionController)

		AddLibrary_transactionController.$inject = ['$state', 'Library_transactionService'];

		function AddLibrary_transactionController($state, Library_transactionService) {
			var vm = this;

			Library_transactionService.getBookInfo().then(function success(data){
	                console.log('Donate Data:  ' + JSON.stringify(data));
	                vm.bookData = data;
	    
	            }, function error(msg){
	                //Notification.error({message: msg, title: 'Error on Donation'});
	            });


			Library_transactionService.getMemberInfo().then(function success(data){
	                console.log('Donate Data:  ' + JSON.stringify(data));
	                vm.memberData = data;
	    
	            }, function error(msg){
	                //Notification.error({message: msg, title: 'Error on Donation'});
	            });

			vm.SaveTransactionDetails = function () {

	            var libraryData = {
	                bookId:               vm.user.bookId,
	                memberId:       	  vm.user.memberId,
	                status:               vm.user.status
	            };

	            console.log('Hello libraryData data' + JSON.stringify(libraryData));


	            Library_transactionService.addLibrary_transactionInfo(libraryData).then(function success(data){
	                console.log('Donate Data:  ' + JSON.stringify(data));
	                vm.donation = data;
	                $state.go('admin.viewLibrary_transaction', {}, {reload:true});
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
