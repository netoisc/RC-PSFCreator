angular.module('PSFcreator')
    .controller('DetailSectionCtrl', function ($scope, $routeParams, $location,$window) {
        var self = this;
        $scope.sectionsOfSection = [];

        var idsection = $routeParams.idSection;
        $scope.currentSection = $scope.findSectionName(idsection);
        //funciones
        $scope.deleteSection = function () {

            if ($window.confirm('Estás seguro de eliminar la sección: ' + $scope.currentSection.name)) {
                if ($scope.currentSection.parent == undefined) { //es a nivel psf
                    $scope.psf.deleteSection($scope.currentSection);
                } else {
                    var sectionFromDelete = $scope.currentSection.parent;
                    sectionFromDelete.deleteSectionByName($scope.currentSection.name);
                    $scope.currentSection
                }
            }
        }
    });