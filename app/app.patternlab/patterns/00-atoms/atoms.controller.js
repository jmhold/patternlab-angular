(function () {
    'use strict';

    angular
        .module('app')
        .controller("AtomsController", AtomsController);

    function AtomsController($scope) {

        this.patternTitle = "Atoms";

    }

})();