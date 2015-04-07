angular.module('PSFcreator')
.controller('ListSectionCtrl',function($scope, $routeParams,$location){
    var self= this;
    self.sections =[];
    if($location.path() =='/'){ //secciones del psf
        self.sections = $scope.psf.sections;
    }
    else {        
        var idsection= $routeParams.idSection;
        self.section = $scope.findSectionName(idsection);
        self.sections = self.section.sections;
    }
    
    this.deleteSection= function(section){
        
    }
});