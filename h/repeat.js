(function() {
    'use strict';
    var app = angular.module('app', []);
    angular
        .module('app')
        .controller('repeatController', repeatController);
    repeatController.$inject = ['$scope'];

    function repeatController($scope) {
        var employees = [
            { a: "giang", b: "58pm", c: 'kakaka', d: "1000" },
            { a: "giang1", b: "58pm1", c: 'kakaka1', d: "10001" },
            { a: "giang2", b: "58pm2", c: 'kakaka2', d: "10002" },
            { a: "giang3", b: "58pm3", c: 'kakaka3', d: "10003" },
            { a: "giang4", b: "58pm4", c: 'kakaka4', d: "10004" }
        ];
        $scope.employees = employees;
    }
})();