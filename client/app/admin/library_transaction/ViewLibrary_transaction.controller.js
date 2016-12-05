(function (angular) {
	
	'use strict';

	angular
		.module('libraryManagementApp')
		.controller('ViewLibrary_transactionController', ViewLibrary_transactionController)

		ViewLibrary_transactionController.$inject = ['$state', 'Library_transactionService'];

		function ViewLibrary_transactionController($state, Library_transactionService) {
			var vm = this;


	 Library_transactionService.getLibrary_transactionInfo().then(function success(data) {
	         
	       console.log('libraryData Data:  ' + JSON.stringify(data));
            vm.libraryData = data;
        }, function error(msg) {
           console.log('Campaign Error: ' + msg);
        });

	   vm.updateBookTransaction = function (status, libId) {

        	console.log('Update libId : ' + status + " "+libId);  

            var libraryUpdateData = {
        		status   : status
        	} 

        	Library_transactionService.updateLibrary_transactionInfo(libraryUpdateData, libId).then(function success(data) {
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