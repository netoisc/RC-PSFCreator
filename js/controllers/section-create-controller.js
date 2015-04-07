angular.module('PSFcreator')
    .controller('CreateSectionCtrl', function ($scope, $routeParams, $location, Section) {
        this.section = new Section('', '', '');        
        var idParentSection = $routeParams.idParentSection || '';
        this.title = "Creación de sección";
        
        this.save = function () {            
            if (idParentSection != '') {
                var parentSection= $scope.findSectionName(idParentSection);
                parentSection.addChild(this.section);
            } else {
                $scope.psf.addSectionParent(this.section);                
            }
            $location.path('/');
        };
        this.cancel = function () {
            $location.path('/');
        };
    });