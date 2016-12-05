'use strict'

	angular
		.module('libraryManagementApp')
		.service('MemberService', MemberService)

		MemberService.inject = ['$http'];

		function MemberService($http) {

			var baseUrl = '/api/members/';

		 		return {
		 		// Get Member Info Service
		 		getMemberInfo : function() {
		 			return $http.get(baseUrl).then(parseResponse);
		 		},

		 		// Get Member Info by cityInfo Id Service 
		 		getMemberInfobyId : function(id) {
		 			return $http.get(baseUrl + id).then(parseResponse);
		 		},

		 		/* Update State  */
				updateMemberInfo: function (data, id) {
					return $http.put(baseUrl + id , data).then(parseResponse);
				},

		 		// Add Member Info service 
		 		addMemberInfo : function (data) {
		 			return $http.post(baseUrl , data).then(parseResponse);
		 		}
		 	};

		 	function parseResponse(response) {
		 		return response.data;
		 	}
		}