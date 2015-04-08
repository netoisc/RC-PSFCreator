angular.module('PSFcreator')
    .controller('CreateSectionCtrl', function ($scope, $routeParams, $location, Section, $window) {
        this.section = new Section('', '', '');
        var idParentSection = $routeParams.idParentSection || '';
        if (idParentSection === '') {
            this.title = "Crear sección al psf";
        } else {
            this.title = "Agregar sección para:" + idParentSection;
        }

        this.save = function () {
            if (idParentSection != '') {
                var parentSection = $scope.findSectionName(idParentSection);
                parentSection.addChild(this.section);
            } else {
                $scope.psf.addSectionParent(this.section);
            }
            //$location.path('/');
            $window.history.back();
        };
        this.cancel = function () {
            $location.path('/');
        };
    });