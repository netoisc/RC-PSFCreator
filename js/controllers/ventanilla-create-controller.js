angular.module('PSFcreator')
    .controller('CreateVentanillaController', function ($scope, PSF, $window) {
        $scope.psf = new PSF('Primer ventanilla', 'prueba');
        
        $scope.findSectionName = function (name) {
            var sections = $scope.psf.sections;
            var sectionFound = findSectionInSections(sections, name);
            return sectionFound;
        };
        function findSectionInSections(sections, name) {
            var sectFound = undefined;
            for (var i = 0; i < sections.length; i++) {
                if (sections[i].name === name)
                    sectFound = sections[i];
            }
            if (sectFound === 'undefined') {
                for (var i = 0; i < sections.length; i++) {
                    sectFound = findSectionInSections(sections[i].sections);
                    if (sectFound != 'undefined') {
                        break;
                    }
                }
            }
            return sectFound;
        }
    });