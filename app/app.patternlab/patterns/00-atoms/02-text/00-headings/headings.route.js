(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'headings',
                parent:'text'
            }
        );

        $stateProvider
            .state('rvHeadings', {
                url: "/rvHeadings",
                controller: "HeadingsController",
                templateUrl: "app.patternlab/patterns/00-atoms/02-text/00-headings/headings.tpl.html"
            })
    }

})();