(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'patterns'
            }
        );
        
        $stateProvider
            .state('patterns', {
                url: "/patterns",
                template: '<pattern pname="patterns"></pattern>'
            })
    }

})();