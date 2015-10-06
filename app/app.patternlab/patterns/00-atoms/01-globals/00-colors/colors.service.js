(function () {
    'use strict';

    angular
        .module('app')
        .service("ColorsService", ColorsService);

    function ColorsService() {

        var service = {
            patternColors: [
                {
                    'name':'Chembook Colors',
                    'colors':[
                        {
                            'name':'Primary',
                            'hex':'#444444'
                        },
                        {
                            'name':'Red',
                            'hex':'#e30036'
                        },
                        {
                            'name':'Link',
                            'hex':'#e30036'
                        },
                        {
                            'name':'Corn',
                            'hex':'#992824'
                        },
                        {
                            'name':'Soy',
                            'hex':'#006699'
                        },
                        {
                            'name':'Wheat',
                            'hex':'#D9B901'
                        },
                        {
                            'name':'Sorghum',
                            'hex':'#F60'
                        },
                        {
                            'name':'Alfalfa',
                            'hex':'#060'
                        },
                        {
                            'name':'Good',
                            'hex':'#62AF08'
                        },
                        {
                            'name':'Fair',
                            'hex':'#DACB1E'
                        },
                        {
                            'name':'Poor',
                            'hex':'#DA1E1E'
                        }
                    ]
                }
            ]
        };

        return service;

    }

})();