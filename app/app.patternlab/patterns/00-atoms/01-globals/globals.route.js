(function () {
    'use strict';

    angular
        .module('app')
        .config(config);


    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'globals',
                parent:'atoms'
            }
        );

        $stateProvider
            .state('globals', {
                url: "/globals",
                template: '<pattern pname="globals"></pattern>'
            })
    }

})();