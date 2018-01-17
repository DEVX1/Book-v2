var model = {
    user: "Malesz Elo"
};

var bookListApp = angular.module("bookListApp", []);

bookListApp.run(function ($http) {
    $http.get("booklist.json").success(function (data) {
        model.items = data;
    });
});

bookListApp.filter("checkedItems", function () {
    return function (items, showComplete) {
        var resultArr = [];
        angular.forEach(items, function (item) {
            if (item.done == false || showComplete == true) {
                resultArr.push(item);
            }
        });
        return resultArr;
    }
});

bookListApp.controller("bookListCtrl", function ($scope) {
    $scope.booklist = model;

    $scope.addNewItem = function (actionText) {
        $scope.booklist.items.push({
            action: actionText,
            done: false
        });
    }
});
