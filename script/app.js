;(function() {
  'use strict';
  angular.module('app', []);

  angular.module('app')
         .controller('mainCtrl', ['$scope', mainCtrl]);

  function mainCtrl($scope) {
    console.log('mainCtrl');
  }
})();
