(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'text',
                parent:'atoms'
            }
        );

        $stateProvider
            .state('rvText', {
                url: "/rvText",
                template: "<pattern-text></pattern-text>"
            })
    }

})();