'use strict'

	angular
		.module('libraryManagementApp')
		.service('BookService', BookService)

		BookService.inject = ['$http'];

		function BookService($http) {

			var baseUrl = '/api/books/';

		 	return {
		 		// Get Book Info Service
		 		getBookInfo : function() {
		 			return $http.get(baseUrl).then(parseResponse);
		 		},

		 		// Get Book Info by cityInfo Id Service 
		 		getBookInfobyId : function(id) {
		 			return $http.get(baseUrl + id).then(parseResponse);
		 		},

		 		/* Update State  */
				updateBookInfo: function (data, id) {
					return $http.put(baseUrl + id , data).then(parseResponse);
				},

		 		// Add Book Info service 
		 		addBookInfo : function (data) {
		 			return $http.post(baseUrl , data).then(parseResponse);
		 		}
		 	};

		 	function parseResponse(response) {
		 		return response.data;
		 	}
		}