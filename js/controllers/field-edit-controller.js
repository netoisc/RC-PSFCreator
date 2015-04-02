angular.module('PSFcreator')
.controller('FieldEditCtrl',function($scope,$routeParams,$location,$window){
    debugger;
    var self = this;
    self.fieldOrig={};
    self.field={};
    
    
    var nameSection = $routeParams.idSection;
    var idField = $routeParams.idField;    
    var index = $routeParams.index;
    
    self.section =$scope.findSectionName(nameSection);
    if(self.section === 'undefined'){
        alert('No se encontró una seccion con el nombre indicado');    
        $location('/');
    }
    self.fieldOrig = self.section.fields[index];    
    self.field = angular.copy(self.fieldOrig);
    
    //functions
    self.save = function(){                
        
        if(true) {//si el field es valido
            self.section.fields[index]= self.field;
        }
        $location.path('/');
    }
    
    self.cancel = function(){  
        angular.copy(self.fieldOrig,self.field);
        $location.path('/');
    }
    
    
});