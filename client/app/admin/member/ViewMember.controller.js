(function (angular) {
	
	'use strict';

	angular
		.module('libraryManagementApp')
		.controller('ViewMemberController', ViewMemberController)

		ViewMemberController.$inject = ['$state', 'MemberService'];

		function ViewMemberController($state, MemberService) {
			var vm = this;

			// Get All Data
        MemberService.getMemberInfo().then(function success(data) {
            vm.MemberData = data;
            console.log(JSON.stringify(data));
        }, function error(msg) {
           console.log('Member Error: ' + msg);
        });

		}

}(window.angular));