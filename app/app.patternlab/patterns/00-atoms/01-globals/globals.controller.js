(function () {
    'use strict';

    angular
        .module('app')
        .controller("GlobalsController", GlobalsController);

    function GlobalsController() {

        this.patternTitle = "Globals";

    }

})();