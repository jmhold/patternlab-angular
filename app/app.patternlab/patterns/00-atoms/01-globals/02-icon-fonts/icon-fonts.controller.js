(function () {
    'use strict';

    angular
        .module('app')
        .controller("IconFontsController", IconFontsController);

    function IconFontsController(IconFontsService) {

        var vm = this;

        vm.patternTitle = "Icon Fonts";

        IconFontsService.getIconsList().then(function(response){
            vm.iconList = response.selection;
        })

    }

})();