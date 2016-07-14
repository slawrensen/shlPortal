// Define the `SharedHomeLab` module
var shlApp = angular.module('SharedHomeLab', ['ui.bootstrap', 'ngRoute']);

shlApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      // Home
      .when("/", { templateUrl: "./parts/home.html", controller: "PageCtrl" })
      // Pages
      .when("/about", { templateUrl: "./parts/about.html", controller: "PageCtrl" })
      .when("/faq", { templateUrl: "./parts/faq.html", controller: "PageCtrl" })
      .when("/pricing", { templateUrl: "./parts/pricing.html", controller: "PageCtrl" })
      .when("/services", { templateUrl: "./parts/services.html", controller: "PageCtrl" })
      .when("/contact", { templateUrl: "./parts/contact.html", controller: "PageCtrl" })
      // Blog
      .when("/blog", { templateUrl: "./parts/blog.html", controller: "BlogCtrl" })
      .when("/blog/post", { templateUrl: "./parts/blog_item.html", controller: "BlogCtrl" })
      // else 404
      .otherwise("/404", { templateUrl: "./parts/404.html", controller: "PageCtrl" });
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
    console.log("Page Controller reporting for duty.");

    // Activates the Carousel
    $('.carousel').carousel({
        interval: 5000
    });

    // Activates Tooltips for Social Links
    $('.tooltip-social').tooltip({
        selector: "a[data-toggle=tooltip]"
    })
});

