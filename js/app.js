angular.module('assessment', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider
  .state('home', {
    url: '/',
    controller: 'homeCtrl',
    templateUrl: '../views/home.html'
  })
  .state('about', {
    url: '/about',
    controller: 'aboutCtrl',
    templateUrl: '../views/about.html'
  })
  .state('product-details', {
    url: '/product-details/:id',
    controller: 'productCtrl',
    templateUrl: '../views/product-details.html'
  })
  .state('shop', {
    url: '/shop',
    controller: 'shopCtrl',
    templateUrl: '../views/shop.html'
  })
  .state('blog', {
    url: '/blog',
    controller: 'blogCtrl',
    templateUrl: '../views/blog.html'
  })
})
