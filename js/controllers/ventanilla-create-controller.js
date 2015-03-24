angular.module('PSFcreator')
.controller('CreateVentanillaController', function($scope, PSF){
    $scope.psf= new PSF('Primer ventanilla','prueba');    
    
    $scope.addSectionToPSF= function(section){
      $scope.psf.sections.push(section);  
    };
});