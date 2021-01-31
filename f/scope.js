var myApp = angular.module('scopeDemo', []);
myApp.controller('classController', classController);
myApp.controller('schoolController', schoolController);
myApp.controller('topController', topController);

function classController($scope) {

}

function schoolController($scope, $rootScope) {
    $scope.name = "chill controller";

}

function topController($scope, $rootScope) {
    $scope.name = "nguyen thanh gia g";

}