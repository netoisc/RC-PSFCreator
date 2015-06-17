angular.module('PSFcreator')
    .controller('FieldCreateCtrl', function ($scope, $routeParams, $location,Field,$window) {
        var self = this;
        
        $scope.field = new Field('','','','','');
    
        var nameSection = $routeParams.idSection;
        $scope.section = $scope.findSectionName(nameSection);
        if (self.section === 'undefined') {
            alert('No se encontró una sección con el nombre: ' + nameSection);
        }
        $scope.title= 'Crear Campo para: ' + $scope.section.name;
        //functions
        $scope.save = function () {            
            $scope.section.fields.push($scope.field);
            //se avisa del object creado
            $scope.$emit('objectAdded',this.field.name);
            $window.history.back();
        };
        $scope.cancel = function () {
            $window.history.back();
        };
    

    });