console.log("app.js")

var app = angular.module('hwyApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('');
	$routeProvider
		.when('/blueRidge', {
			controller: 'MainCtrl',
			templateUrl: 'partials/blueRidge.html'
		})
		.when('/natchez', {
			controller: 'NatchezCtrl',
			templateUrl: 'partials/natchez.html'
		})
		.when('/links', {
			controller: 'LinksCtrl',
			templateUrl: 'partials/links.html'
		})
		.otherwise({
			redirect: '/'
		});
});

app.controller('MainCtrl', function($scope) {
	// $scope.img = `<`
	$scope.highwayName = 'Blue Ridge Parkway';
	$scope.highwayDescription = 'One of the prettiest drives in the US, winds through the Blue Ridge Mountains.';
	// console.log('blueRidge')
})

app.controller('NatchezCtrl', function($scope) {
	$scope.highwayName = 'Natchez Trace Parkway';
	$scope.highwayDescription = "Travel from Franklin, TN to Natchez, MS on this gorgeous drive!"
	// console.log('natchez')
})

app.controller('LinksCtrl', function($scope) {

})
