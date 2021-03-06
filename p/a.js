(function() {
    var app = angular.module('app', []);

    app.controller("f", f)
    f.$inject = ['$scope'];

    function f($scope) {
        var e = [
            { ten: "giang", tuoi: new Date('12/3/1989'), luong: 12, gioitinh: "nam", status: true },
            { ten: "ha", tuoi: new Date('6/15/1990'), luong: 12, gioitinh: "nam", status: true },
            { ten: "hanh", tuoi: new Date('3/3/1999'), luong: 12, gioitinh: "nu", status: false },
            { ten: "hanh", tuoi: new Date('2/7/1997'), luong: 12, gioitinh: "nam", status: true },
            { ten: "tien", tuoi: new Date('9/6/1994'), luong: 12, gioitinh: "nu", status: false },
            { ten: "duong", tuoi: new Date('8/8/1995'), luong: 12, gioitinh: "nu", status: true },
        ];
        $scope.e = e;
        $scope.sortColumn = 'ten';
        $scope.reversed = false;
        $scope.searchText = "";
        $scope.sortData = function(column) {
            if ($scope.sortColumn == column)
                $scope.reverse = !$scope.reverse;
            else {
                $scope.reverse = false;
                $scope.sortColumn = column;
            }
            $scope.getSortClass = function(column) {
                if ($scope.sortColumn == column) {
                    return $scope.reverse ? 'arrow-up' : 'arrow-down';
                }
                return "";
            }
        }

    }
    app.filter('status', function() {
        return function(input) {
            if (input == true)
                return "kich hoat";
            else {
                return "khoa";
            }
        }
    })
})()