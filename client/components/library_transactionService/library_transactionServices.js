'use strict'

	angular
		.module('libraryManagementApp')
		.service('Library_transactionService', Library_transactionService)

		Library_transactionService.inject = ['$http'];

		function Library_transactionService($http) {

			var baseUrl = '/api/library_transactionss/';
			return {
				 		// Get Book Info Service
				 		getLibrary_transactionInfo : function() {
				 			return $http.get(baseUrl).then(parseResponse);
				 		},
				 		//book data
				 		getBookInfo : function() {
				 			return $http.get('/api/books/').then(parseResponse);
				 		},
				 		//member data
				 		getMemberInfo : function() {
				 			return $http.get('/api/members/').then(parseResponse);
				 		},

				 		// Get Library_transaction Info by cityInfo Id Service 
				 		getLibrary_transactionInfobyId : function(id) {
				 			return $http.get(baseUrl + id).then(parseResponse);
				 		},

				 		/* Update State  */
						updateLibrary_transactionInfo: function (data, id) {
							return $http.put(baseUrl + id , data).then(parseResponse);
						},

				 		// Add Library_transaction Info service 
				 		addLibrary_transactionInfo : function (data) {
				 			return $http.post(baseUrl , data).then(parseResponse);
				 		}
				 	};

		 	function parseResponse(response) {
		 		return response.data;
		 	}
		}