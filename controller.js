angular.module('userProfiles').controller('mainController', function($scope, mainService){
  //this is to test angular
  $scope.thisAppIsBroken = "This angular app is working";
  //inject the mainService in the controller
  $scope.getUsers = function(){
    $scope.users = mainService.getUsers();
  };
  //this is storing the data in a var users
  $scope.getUsers();
  $scope.toggleFavorite = mainService.toggleFavorite;
});
