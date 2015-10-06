(function () {
    'use strict';

    angular
        .module('app')
        .service("TextFontsService", TextFontsService);

    function TextFontsService() {

        var service = {
            'patternFonts':
            {
                'fontFiles':[
                    {
                        'name':'Black',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Black.ttf'
                    },
                    {
                        'name':'Black Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-BlackItalic.ttf'
                    },
                    {
                        'name':'Bold',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Bold.ttf'
                    },
                    {
                        'name':'Bold Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-BoldItalic.ttf'
                    },
                    {
                        'name':'Hairline',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Hairline.ttf'
                    },
                    {
                        'name':'Hairline Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-HairlineItalic.ttf'
                    },
                    {
                        'name':'Heavy',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Heavy.ttf'
                    },
                    {
                        'name':'Heavy Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-HeavyItalic.ttf'
                    },
                    {
                        'name':'Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Italic.ttf'
                    },
                    {
                        'name':'Light',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Light.ttf'
                    },
                    {
                        'name':'Light Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-LightItalic.ttf'
                    },
                    {
                        'name':'Medium',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Medium.ttf'
                    },
                    {
                        'name':'Medium Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-MediumItalic.ttf'
                    },
                    {
                        'name':'Regular',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Regular.ttf'
                    },
                    {
                        'name':'Semibold',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Semibold.ttf'
                    },
                    {
                        'name':'Semibold Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-SemiboldItalic.ttf'
                    },
                    {
                        'name':'Thin',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-Thin.ttf'
                    },
                    {
                        'name':'Thin Italic',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/Lato-ThinItalic.ttf'
                    },
                    {
                        'name':'All',
                        'source':'app.patternlab/patterns/00-atoms/01-globals/01-text-fonts/assets/lato/lato.zip'
                    }
                ],
                'fontStyles':[
                    {
                        'name':'Lato 100',
                        'value':'font-family:"Lato"; font-weight:100'
                    },
                    {
                        'name':'Lato 300',
                        'value':'font-family:"Lato"; font-weight:300'
                    },
                    {
                        'name':'Lato 400',
                        'value':'font-family:"Lato"; font-weight:400'
                    },
                    {
                        'name':'Lato 700',
                        'value':'font-family:"Lato"; font-weight:700'
                    },
                    {
                        'name':'Lato 900',
                        'value':'font-family:"Lato"; font-weight:900'
                    }
                ],
                'fontAttributes':[
                    {
                        'name':'Google Fonts HTML Link',
                        'value':"<link href='//fonts.googleapis.com/css?family=Lato:100,300,400,700,900' rel='stylesheet' type='text/css'>"
                    },
                    {
                        'name':'Font Stack',
                        'value':'"Lato", sans-serif;'
                    }
                ]
            }
        };

        return service;

    }

})();