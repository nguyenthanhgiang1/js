var app = angular.module('h', []);
app.controller('h1', ['$scope', function($scope) {
    var h3 = [{ name: "c0", like: 0, dis: 0 },
        { name: "c1", like: 1, dis: 1 },
        { name: "c2", like: 2, dis: 2 },
        { name: "c3", like: 3, dis: 3 }
    ]
    $scope.h3 = h3;
}])