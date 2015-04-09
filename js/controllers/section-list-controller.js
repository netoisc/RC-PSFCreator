angular.module('PSFcreator')
    .controller('ListSectionCtrl', function ($scope, $routeParams, $location) {
        var self = this;
        self.sections = [];

        var idsection = $routeParams.idSection;
        self.section = $scope.findSectionName(idsection);
        self.sections = self.section.sections;

        this.deleteSection = function (section) {
            if($window.confirm('Estás seguro de eliminar la sección:'+ section.name)){
            self.section.deleteSection(section);
        }
        }
    });