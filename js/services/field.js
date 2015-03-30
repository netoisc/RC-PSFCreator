angular.module('PSFcreator')
.factory('Field',function(){
    
    function Field(type,name,displayName,helpText,description) {
        
        this.type = type || '';
        this.name = name;
        this.displayName = displayName || '';
        this.helpText = helpText || '';
        this.description = description || '';
        this.validators = [];
        this.promotions = [];        
    }
    
    return Field;
});