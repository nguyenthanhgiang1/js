(function() {

    // 'use strict';
    // var app = angular.module('app', []);
    var app = angular.module('app', []);
    app.controller('n', ['$scope', function($scope) {
        var countries = [{
                name: "UK",
                cities: [
                    { name: "london" },
                    { name: "london1" },
                    { name: "london2" }
                ]
            },
            {
                name: "UK1",
                cities: [
                    { name: "london3" },
                    { name: "london4" },
                    { name: "london5" }
                ]
            },
            {
                name: "UK2",
                cities: [
                    { name: "london6" },
                    { name: "london7" },
                    { name: "london8" }
                ]
            }
        ];
        $scope.countries = countries;
    }])



})();





// (function() {
//     var app = angular.module('app', []);
//     app.controller('nestedRepeatController', ['$scope', function($scope) {
//         var countries = [{
//                 name: "UK",
//                 cities: [
//                     { name: "London" },
//                     { name: "Birmingham" },
//                     { name: "Manchester" }
//                 ]
//             },
//             {
//                 name: "USA",
//                 cities: [
//                     { name: "Los Angeles" },
//                     { name: "Chicago" },
//                     { name: "Houston" }
//                 ]
//             },
//             {
//                 name: "India",
//                 cities: [
//                     { name: "Hyderabad" },
//                     { name: "Chennai" },
//                     { name: "Mumbai" }
//                 ]
//             }
//         ];
//         $scope.countries = countries;
//     }]);
// })();