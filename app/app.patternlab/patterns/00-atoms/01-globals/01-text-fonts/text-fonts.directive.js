/* text-fonts.directive.js */

/**
 * @desc display all text-fonts
 * @example <pattern-text-fonts></pattern-text-fonts>
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('patternTextFonts', patternTextFonts);

    function patternTextFonts() {
        return {
            restrict: 'E',
            templateUrl: "app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/text-fonts.tpl.html",
            controller: "TextFontsController",
            controllerAs: "text"
        };
    }

})();