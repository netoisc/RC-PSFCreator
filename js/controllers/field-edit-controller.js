angular.module('PSFcreator')
.controller('FieldEditCtrl',function($scope,$routeParams,$location){
    var self = this;
    self.field={};
    
    debugger;
    var nameSection = $routeParams.idSection;
    var idField = $routeParams.idField;
    
    var section =$scope.findSectionName(nameSection);
    if(section === 'undefined'){
    alert('No se encontró una seccion con el nombre indicado');    
    }
    
    
    self.section = section;
    var editField = section.findField(idField);
    
    if(editField === undefined){
    
        alert('No se encontró un field ' + idField);
    }
    
    
    
    $scope.field = editField;
    
    
    $scope.field.section = section;
    
    
    $scope.field.oldField = editField.Nombre;
    
    $scope.field.updateField = function(){        
        //self.section.fields.push(self.field);
        
        debugger;
        //alert("Voy a actualizar");
        
        var section = this.section;
        var oldName  = this.oldField;
        
        delete this.section;
        delete this.oldField;
        
        section.updateField('heyDude',this)
        
        $location.path('/');
    }
    
    $scope.field.cancel = function(){        
        $location.path('/');
    }
    
    
});