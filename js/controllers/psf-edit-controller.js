angular.module('PSFcreator')
.controller('PSFEditController',function($scope,$window){
    var self= this;
    $scope.sections = $scope.psf.sections;
    
    $scope.deleteSection= function(section){
        if($window.confirm('Estás seguro de eliminar la sección:'+ section.name)){
            $scope.psf.deleteSection(section);
        }
    }
});