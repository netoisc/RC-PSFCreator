angular.module('PSFcreator')
.controller('FieldEditCtrl',function($scope,$routeParams,$location,$window){    
    var self = this;
    $scope.fieldOrig={};
    $scope.field={};
    
    
    var nameSection = $routeParams.idSection;
    var idField = $routeParams.idField;    
    var index = $routeParams.index;
    
    $scope.section =$scope.findSectionName(nameSection);
    if($scope.section === 'undefined'){
        alert('No se encontró una seccion con el nombre indicado');    
        $location('/');
    }
    $scope.title= 'Editar Campo para: ' + $scope.section.name;
    $scope.fieldOrig = $scope.section.fields[index];    
    $scope.field = angular.copy($scope.fieldOrig);
    
    //functions
    $scope.save = function(){                
        
        if(true) {//si el field es valido
            self.section.fields[index]= $scope.field;
        }
        $window.history.back();
    }
    
    $scope.cancel = function(){  
        angular.copy($scope.fieldOrig,$scope.field);
        $window.history.back();
    }
    
    
});