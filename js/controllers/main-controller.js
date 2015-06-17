angular.module('PSFcreator')
    .controller('MainController', function ($scope, PSF, $window) {
        $scope.psf = new PSF('UN PSF', 'prueba');
        $scope.uniqueObjectNames = [];
        $scope.$on('objectAdded', function (event,objname) {            
            //agregar el nombre de la sección o campo
            $scope.uniqueObjectNames.push(objname);
        });
        $scope.findSectionName = function (name) {
            var sections = $scope.psf.sections;
            return findSectionInSections(sections, name);
        };

        function findSectionInSections(sections, name) {
            var sectFound = undefined;
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].name === name)
                    sectFound = sections[i];
            }
            if (sectFound === undefined) {
                for (var i = 0; i < sections.length; i++) {
                    sectFound = findSectionInSections(sections[i].sections, name);
                    if (sectFound != undefined) {
                        break;
                    }
                }
            }
            return sectFound;
        }


    });