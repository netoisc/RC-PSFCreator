
angular.module('PSFcreator')
.factory('ServicePSF',function ServicePSFFactory(){
    
    var PSF = {};
    
    PSF.sections = [];
    
    return  
    {
    
        
        addSectionChild :  function (parentSection, childSection){
            return undefined;
        },
        
        addSectionToSection(parentSection, childSection){
        
        },
        
        removeSectionByName : function(nameSection){
        
            return undefined;
        },
        
        findElementByName : function(name){
        
               return undefined;
        }
        
    };
});