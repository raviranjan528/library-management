(function (angular) {
	
	'use strict';

	angular
		.module('libraryManagementApp')
		.controller('AddMemberController', AddMemberController)

		AddMemberController.$inject = ['$state','MemberService'];

		function AddMemberController($state, MemberService) {
			var vm = this;


			vm.SaveUserDetails = function () {

	            var UserData = {
	                username:       vm.user.username,
	                name:       	vm.user.name,
	                email:          vm.user.email,
	                contactNo:      vm.user.contactNo 
	            };

	            console.log('Hello UserData data' + JSON.stringify(UserData));


	            MemberService.addMemberInfo(UserData).then(function success(data){
	                //console.log('Donate Data:  ' + JSON.stringify(data));
	                vm.donation = data;
	                $state.go('admin.viewMember', {}, {reload:true});
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