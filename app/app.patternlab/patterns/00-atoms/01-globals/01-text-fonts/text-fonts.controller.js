(function () {
    'use strict';

    angular
        .module('app')
        .controller("TextFontsController", TextFontsController);

    function TextFontsController($scope, TextFontsService) {

        this.patternTitle = "Text Fonts";

        this.fontStyles = TextFontsService.patternFonts.fontStyles;

        this.fontAttributes = TextFontsService.patternFonts.fontAttributes;

        this.fontFiles = TextFontsService.patternFonts.fontFiles;

    }

})();