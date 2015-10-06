(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'images',
                parent:'atoms'
            }
        );

        $stateProvider
            .state('rvImages', {
                url: "/rvImages",
                template: "<pattern-text></pattern-text>"
            })
    }

})();