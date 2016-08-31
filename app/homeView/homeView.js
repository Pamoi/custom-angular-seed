'use strict';

angular.module('myApp.homeView', ['ui.router'])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'homeView/homeView.html',
    controller: 'HomeViewCtrl'
  });
}])

.controller('HomeViewCtrl', [function() {

}]);
