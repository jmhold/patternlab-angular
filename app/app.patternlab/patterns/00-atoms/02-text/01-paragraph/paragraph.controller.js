(function () {
    'use strict';

    angular
        .module('rvText')
        .controller("ParagraphController", ParagraphController);

    function ParagraphController($scope) {

        $scope.patternTitle = "Paragraph";

    }

})();