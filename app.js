var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope){
  console.log("My controller....");
  
  $scope.users = [
    { name: "Product One", price: 22.50},
    { name: "Product Two", price: 15.00},
    { name: "Product Four", price: 123.82},
    { name: "Product Five", price: 123.75}
  ];

  $scope.addUser = function () {
    $scope.users.push($scope.newUser);
    $scope.newUser = {};
    $scope.message = "Added successfully";
    };

  $scope.selectUser = function(user){
    console.log(user);
    $scope.clickedUser = user;
  };

  $scope.editUser = function () {
    $scope.message = "User Edited successfully";
  };

  $scope.deleteUser = function () {
    $scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
    $scope.message = "Deleted successfully";
  };

  $scope.clearMessage = function () {
    $scope.message = "";
  };
});
