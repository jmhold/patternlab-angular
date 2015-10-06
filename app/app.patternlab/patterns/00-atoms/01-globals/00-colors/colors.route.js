(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'colors',
                parent:'globals'
            }
        );

        $stateProvider
            .state('colors', {
                url: "/colors",
                controller: "ColorsController",
                template: '<pattern pname="colors"></pattern>'
            });

        //
    }

})();