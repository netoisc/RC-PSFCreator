angular.module('PSFcreator')
.factory('Field',function(){
    
    function Field(id,type,name,displayName,helpText,description) {
        
        this.type = type || new Error('type must initialize');
        this.name = name;
        this.displayName = displayName || '';
        this.helpText = helpText || '';
        this.description = description || '';
        this.validators = [];
        this.promotions = [];        
    }
    
    return Field;
});