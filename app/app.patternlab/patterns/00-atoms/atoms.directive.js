/* atoms.directive.js */

/**
 * @desc display all atoms
 * @example <pattern-atoms></pattern-atoms>
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('patternAtoms', patternAtoms);

    function patternAtoms() {
        return {
            restrict: 'E',
            templateUrl: "app.patternlab/patterns/00-atoms/atoms.tpl.html",
            controller: "AtomsController",
            controllerAs: "atoms"
        };
    }

})();