(function() {
    'use strict';

    angular.module('starter').controller('AboutusCtrl', function($scope) {

    $scope.gotoPricegenie = function() {
        console.log("terms");
        window.open("http://pricegenie.co/", '_system', 'location=yes');
    };
});
 })();