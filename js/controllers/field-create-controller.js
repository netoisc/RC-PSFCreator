angular.module('PSFcreator')
    .controller('FieldCreateCtrl', function ($scope, $routeParams, $location,Field) {
        var self = this;
    
        self.field = new Field('','','','','');
    
        var nameSection = $routeParams.idSection;
        self.section = $scope.findSectionName(nameSection);
        if (self.section === 'undefined') {
            alert('No se encontró una sección con el nombre: ' + nameSection);
        }
        //functions
        self.save = function () {            
            self.section.fields.push(self.field);
            $location.path('/');
        };
        self.cancel = function () {
            $location.path('/');
        };
    

    });