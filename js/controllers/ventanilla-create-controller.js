angular.module('PSFcreator')
.controller('CreateVentanillaController', function($scope, PSF){
    $scope.psf= new PSF('Primer ventanilla','prueba');        
    this.hasSections = function(){
        return $scope.psf.sections.length>0;
    };
    $scope.addSectionToPSF= function(section){
      $scope.psf.sections.push(section);  
    };
});