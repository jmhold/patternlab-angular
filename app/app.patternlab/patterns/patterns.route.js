(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider) {
        $stateProvider
            .state('patterns', {
                url: "/patterns",
                templateUrl: "patterns.tpl.html"
            })
    }

})();