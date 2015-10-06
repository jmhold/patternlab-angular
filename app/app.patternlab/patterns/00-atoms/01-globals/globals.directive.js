/* globals.directive.js */

/**
 * @desc display all globals
 * @example <pattern-globals></pattern-globals>
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('patternGlobals', patternGlobals);

    function patternGlobals() {
        return {
            restrict: 'E',
            templateUrl: "app.patternlab/patterns/00-atoms/01-globals/globals.tpl.html",
            controller: "GlobalsController",
            controllerAs: "globals"
        };
    }

})();