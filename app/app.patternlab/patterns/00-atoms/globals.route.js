(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('patterns.globals', {
                url: "/globals",
                templateUrl: "globals.tpl.html"
            })
    }

})();