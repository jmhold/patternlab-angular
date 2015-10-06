/* text-fonts.directive.js */

/**
 * @desc display all patterns
 * @example <pattern-patterns></pattern-patterns>
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('patternPatterns', patternPatterns);

    function patternPatterns() {
        return {
            restrict: 'E',
            templateUrl: "app.patternlab/patterns/patterns.tpl.html",
            controller: "PatternsController",
            controllerAs: "patterns"
        };
    }

})();