var myApp = angular.module('myModule', []).controller('myController', function($scope) {
    var employee = {
        a: "giang",
        b: "nguyen thanh",
        c: "58pm"
    }
    $scope.employee = employee;
});