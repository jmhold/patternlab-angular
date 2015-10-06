(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'logos',
                parent:'images'
            }
        );

        $stateProvider
            .state('rvLogos', {
                url: "/rvLogos",
                controller: "LogosController",
                templateUrl: "app.patternlab/patterns/00-atoms/03-images/00-logos/logos.tpl.html"
            })
    }

})();