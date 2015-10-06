(function () {
    'use strict';

    angular
        .module('app')
        .controller("ColorsController", ColorsController);

    function ColorsController($scope, ColorsService) {

        this.patternTitle = "Colors";

        this.colorList = ColorsService.patternColors;

    }

})();