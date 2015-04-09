angular.module('PSFcreator')
.controller('PSFCreateController',function($scope,$window){
    var self= this;
    self.sections = $scope.psf.sections;
    
    this.deleteSection= function(section){
        if($window.confirm('Estás seguro de eliminar la sección:'+ section.name)){
            $scope.psf.deleteSection(section);
        }
    }
});