/* colors.directive.js */

/**
 * @desc display all colors
 * @example <pattern-colors></pattern-colors>
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('patternColors', patternColors);

    function patternColors() {
        return {
            restrict: 'E',
            templateUrl: "app.patternlab/patterns/00-atoms/01-globals/00-colors/colors.tpl.html",
            controller: "ColorsController",
            controllerAs: "colors"
        };
    }

})();