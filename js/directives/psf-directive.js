angular.module("PSFcreator")
.directive('psfSection',function(){
    return{
        restrict:"E",
        scope:{
            section:"="
        },
        templateUrl : "templates/directives/psf-section.html"
    };
});
           