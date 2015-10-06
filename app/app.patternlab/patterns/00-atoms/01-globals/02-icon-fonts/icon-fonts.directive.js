/* icon-fonts.directive.js */

/**
 * @desc display all text-fonts
 * @example <pattern-icon-fonts></pattern-icon-fonts>
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('patternIconFonts', patternIconFonts);

    function patternIconFonts() {
        return {
            restrict: 'E',
            templateUrl: "app.patternlab/patterns/00-atoms/01-globals/02-icon-fonts/icon-fonts.tpl.html",
            controller: "IconFontsController",
            controllerAs: "icons"
        };
    }

})();