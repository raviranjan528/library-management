(function(angular, undefined) {
  angular.module("libraryManagementApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);