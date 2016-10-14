angular.module('assessment').controller('shopCtrl', function($scope, mainService) {
  $scope.getProducts = function() {
    mainService.getProducts().then(function(response) {
      console.log(response);
      $scope.products = response.data;
    })
  }()

$scope.image = true;
$scope.linkss = false;
$scope.toggle = function() {
  //if the image is clicked then make the
  // image = to false linkss to true
  if($scope.image) {
    $scope.image = false;
  } else {
    $scope.image = true;
  }
}

})
