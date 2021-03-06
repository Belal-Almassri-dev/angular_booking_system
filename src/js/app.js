var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/home', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    }).
    when('/booking', {
      templateUrl: 'views/booking.html',
      controller: 'BookingController'
    }).
    otherwise({
      redirectTo: '/home'
    });
}]);