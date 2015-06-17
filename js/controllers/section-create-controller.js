angular.module('PSFcreator')
    .controller('CreateSectionCtrl', function ($scope, $routeParams, $location, Section, $window) {
        $scope.section = new Section('', '', '');
        var idParentSection = $routeParams.idParentSection || '';
        if (idParentSection === '') {
            $scope.title = "Crear sección al psf";
        } else {
            $scope.title = "Agregar sección para:" + idParentSection;
        }

        $scope.save = function () {
            if (idParentSection != '') {
                var parentSection = $scope.findSectionName(idParentSection);
                parentSection.addChild(this.section);
            } else {
                $scope.psf.addSectionParent(this.section);
            }
            //$location.path('/');
            $scope.$emit('objectAdded',this.section.name);
            $window.history.back();
        };
        $scope.cancel = function () {
            $window.history.back();
        };
    });