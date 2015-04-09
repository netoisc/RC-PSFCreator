angular.module('PSFcreator')
.directive('sectionDetail',function (){
    return {
        restrict:"E",        
        templateUrl:"templates/directives/section-detail.html",
        scope:{
            section:"=",
            deleteSectionCallback:"&"
            
        }
    };
});