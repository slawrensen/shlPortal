// Define the `SharedHomeLab` module
var SharedHomeLab = angular.module('SharedHomeLab', ['ui.bootstrap']);

// Define the `PhoneListController` controller on the `SharedHomeLab` module
SharedHomeLab.controller('PhoneListController', function PhoneListController($scope) {
    $scope.phones = [
      {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
      }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
      }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
      }
    ];
});
