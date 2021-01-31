var app = angular.module('va', []);
app.controller('h', ['$scope', function($scope) {
    var t = [
        { name: "C#", Likes: 0, hieu: 0, Dislikes: 0 },
        { name: "C#1", Likes: 0, hieu: 0, Dislikes: 0 },
        { name: "C#2", Likes: 0, hieu: 0, Dislikes: 0 },
        { name: "C#3", Likes: 0, hieu: 0, Dislikes: 0 }
    ]
    $scope.t = t;
    $scope.tang = function(ta) {
        ta.Likes++;
        ta.hieu = ta.Likes - ta.Dislikes;
    }
    $scope.giam = function(u) {
        u.Dislikes++;
        u.hieu = u.Likes - u.Dislikes;
    }
}]);