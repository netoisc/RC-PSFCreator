angular.module('PSFcreator')
    .directive('psfTrSection', function () {
        return {
            restrict: "A",
            replace:true,
            templateUrl: "templates/directives/psf-tr-section.html",
            scope: {
                nombre: "=",
                hijos: "=",
                id: "="
            }

        };
    });