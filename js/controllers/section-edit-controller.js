angular.module('PSFcreator')
.controller('EditSectionCtrl',function($scope, $routeParams, $location, Section){
    var self = this;
    var idSection = $routeParams.idSection;
    
    if(idSection){
        self.section = $scope.findSectionName(idSection);
        self.sectionOrig = angular.copy(self.section);
    }
    this.save = function(){
        if(true) {//si el field es valido            
        }
        
        $location.path('/');
    };
    this.cancel= function(){
        //devolver la section original         
        angular.copy(self.sectionOrig, self.section);
        $location.path('/');
    };
    
    function createNavigationPath(){
        var linkStr='';
        for(var int =0;i< self.section.length;i++){
            linkStr +='<a href="">';
        }
        return linkStr;
    }
});