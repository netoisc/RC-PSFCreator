angular.module('PSFcreator')
    .controller('FieldCreateCtrl', function ($scope, $routeParams, $location,Field) {
        var self = this;
        self.field = new Field('','','','','');
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
    self.notContainsValidator=function(validatorType){        
        var existe=false;
        for(var i=0;i<self.field.validators.length;i++){
            if(self.field.validators[i].type==validatorType)
            {
                existe=true;
                break;
            }
        }
        return  !existe;
    }

    });