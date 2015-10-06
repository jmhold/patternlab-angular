(function () {
    'use strict';

    angular
        .module('rvText')
        .controller("HeadingsController", HeadingsController);

    function HeadingsController($scope) {

        $scope.patternTitle = "Headings";

    }

})();