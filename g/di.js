var myApp = angular.module('DEMO', [])
    .controller('myController', function($scope) {

    }).directive('heLlo', function() {
        return {
            templateUrl: "a.html"
        }
    });