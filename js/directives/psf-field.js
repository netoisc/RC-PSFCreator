angular.module('PSFcreator')
    .directive('psfTrField', function () {
        return {
            restrict: "A",
            replace:true,
            templateUrl: "templates/directives/psf-tr-field.html",
            scope: {
                nombre: "=",
                tipo: "=",
                id: "=",
                idsection:"=",
                index:"="
            }

        };
    });