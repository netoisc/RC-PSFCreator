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
  
  
  
    Function.prototype.getValidatorsByType = function (){
      
      var simpleValidators = [];
      
      simpleValidators.push('required');
      
      switch(this.type.toUpperCase()){
          
            case 'TEXTTYPE':
                 validators.push('minLength' ,'maxLength');
            case 'DROPDOWNTYPE':
                return validators.push('minLength', 'maxLength', 'regEx');
            case 'CFDITYPE':
            case 'FILETYPE':
                return validators.push('fileExtension');
            case 'DATETYPE':
            case 'DATETIMETYPE':
            case 'MULTILINETYPE':
            default: ;
          
          
      }
      
      return simpleValidators;
      
    };
    
    return Field;
});