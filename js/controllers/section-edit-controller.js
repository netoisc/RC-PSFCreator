angular.module('PSFcreator')
.controller('EditSectionCtrl',function($scope, $routeParams, $location, Section, $window){
    var self = this;
    var idSection = $routeParams.idSection;
    self.title = "Edición de sección";
    if(idSection){
        self.section = $scope.findSectionName(idSection);
        self.sectionOrig = angular.copy(self.section);
    }
    this.save = function(){
        if(true) {//si el field es valido            
        }
        
        $window.history.back();
    };
    this.cancel= function(){
        //devolver la section original         
        angular.copy(self.sectionOrig, self.section);
        $window.history.back();
    };
    
});