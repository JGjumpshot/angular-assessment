angular.module('assessment').controller('productCtrl', function($scope, mainService, $stateParams, $state) {

  $scope.image = true;
  mainService.getProducts($state.params.id).then(function(response) {
    console.log(response);
    $scope.product= response.data[0];
    console.log($scope.product);
  })
    // $scope.products =mainService.getProducts();

})
