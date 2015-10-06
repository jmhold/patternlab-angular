(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'icon-fonts',
                parent:'globals'
            }
        );

        $stateProvider
            .state('icon-fonts', {
                url: "/icon-fonts",
                controller: "IconFontsController",
                template: '<pattern pname="icon-fonts"></pattern>'
            })
    }

})();