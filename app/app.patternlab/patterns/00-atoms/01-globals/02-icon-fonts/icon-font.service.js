(function () {
    'use strict';

    angular
        .module('app')
        .service("IconFontsService", IconFontsService);

    function IconFontsService($http) {

        var getIconsList = function(){
            var valuesObj = $http.get('app.patternlab/patterns/00-atoms/01-globals/02-icon-fonts/assets/fonts/DTN-Revco.json')
                .then(function(response){
                    return response.data;
                });
            return valuesObj;
        };


        var service = {
            'getIconsList':getIconsList
        };


        return service;

    }

})();