(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'text-fonts',
                parent:'globals'
            }
        );

        $stateProvider
            .state('text-fonts', {
                url: "/text-fonts",
                controller: "TextFontsController",
                template: '<pattern pname="text-fonts"></pattern>'
            })
    }

})();