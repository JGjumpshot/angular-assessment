angular.module('assessment').controller('shopCtrl', function($scope, mainService) {
  $scope.getProducts = function() {
    mainService.getProducts().then(function(response) {
      console.log(response);
      $scope.products = response.data;
    })
  }()
})
