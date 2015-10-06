(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($stateProvider, $patternsProvider) {

        $patternsProvider.registerPattern(
            {
                name:'paragraph',
                parent:'text'
            }
        );

        $stateProvider
            .state('rvParagraph', {
                url: "/rvParagraph",
                controller: "ParagraphController",
                templateUrl: "app.patternlab/patterns/00-atoms/02-text/01-paragraph/paragraph.tpl.html"
            })
    }

})();