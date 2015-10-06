/* patternInjector.directive.js */

/**
 * @desc injects the pattern directive and all it's children's directives into template
 * @example <pattern></pattern>
 */

(function () {
    'use strict';

    angular
        .module('app')
        .directive('pattern', pattern);

    function pattern($compile, $patterns, jsonPath) {

        var combineTemplates = function(patternName){
            var template = '';
            //var patternNode = jsonPath($patterns.patterns, '$..patterns[?(@.pname == "' + patternName + '")]');
            var patternNode = jsonPath($patterns.patterns, '$..[?(@.pname == "atoms")]');
            if(patternNode.length > 1){
                console.log("DUPES")
            }else{
                patternNode = patternNode[0];
                console.log(patternNode.pname)
                template += '<pattern-' + patternNode.pname + '></pattern-' + patternNode.pname + '>';
                if(patternNode.children !=undefined){
                    template += loopThroughChildren(patternNode.children)
                }
            }
            return template;
        };

        var loopThroughChildren = function(arr){
            var localTemplate = '';
            for(var i in arr){
                localTemplate += '<pattern-' + arr[i].pname + '></pattern-' + arr[i].pname + '>';
                if(arr[i].children !=undefined){
                    localTemplate += loopThroughChildren(arr[i].children)
                }
            }

            return localTemplate;
        };

        var linker = function(scope, element, attrs){

            element.html(combineTemplates(scope.pname)).show();

            $compile(element.contents())(scope);

        };

        return {
            restrict: 'E',
            link:linker,
            scope: {
                pname:'@'
            }
        };
    }

})();