(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'atoms',
                parent:'patterns'
            }
        );

        $stateProvider
            .state('atoms', {
                url: "/atoms",
                template: '<pattern pname="atoms"></pattern>'
            })
    }

})();