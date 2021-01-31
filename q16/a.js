var app = angular.module('app', []);
app.controller('p', p);
p.$inject = ['$scope', 's'];

function p($scope, s) {
    $scope.input = "";
    $scope.tran = function(input) {
        $scope.output = s.tran(input);
    }
    $scope.toLower = function(input) {
        $scope.output = s.toLower(input);
    }
}