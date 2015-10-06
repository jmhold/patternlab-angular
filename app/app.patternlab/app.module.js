(function () {
    'use strict';

    angular
        .module('app',
        [
            'ui.router',
            'ngAnimate',
            'ngCookies',
            'ngResource',
            'ngSanitize',
            'ngJSONPath'
        ]
    )
    .run(function($patterns){

        $patterns.finalizeHierarchy()

    })

})();