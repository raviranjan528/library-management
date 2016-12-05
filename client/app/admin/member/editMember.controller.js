(function (angular) {
	
	'use strict';

	angular
		.module('libraryManagementApp')
		.controller('EditMemberController', EditMemberController)

		EditMemberController.$inject = ['$state', 'MemberService'];

		function EditMemberController($state, MemberService) {
			var vm = this;

			var MemberID = $state.params.id;
			console.log(MemberID);

			// Get cities by state Id  
			MemberService.getMemberInfobyId(MemberID).then(function success(data){
				console.log('Member data :  ' + JSON.stringify(data));
				vm.member = data;
			},function error(msg) {
				console.log('state error data :  ' + JSON.stringify(msg));
				// Notification.error({
				// 	message: msg.statusText
				// });
			});

		// Update City Data 
		vm.updateMember = function () {

        	console.log('Update City : ' + vm.member.name);  

        	var MemberUpdateData = {
        		name   : vm.member.name
        	} 

        	MemberService.updateMemberInfo(MemberUpdateData, MemberID).then(function success(data) {
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