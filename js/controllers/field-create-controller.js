angular.module('PSFcreator')
    .controller('FieldCreateCtrl', function ($scope, $routeParams, $location) {
        var self = this;
        self.field = {};
        var nameSection = $routeParams.idSection;
        self.section = $scope.findSectionName(nameSection);
        if (self.section === 'undefined') {
            alert('No se encontró una seccion con el nombre indicado');
        }
        self.addField = function () {            
            self.section.fields.push(self.field);
            $location.path('/');
        };
        self.cancel = function () {
            $location.path('/');
        };

    });