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
  
  
  
    Field.prototype.getValidatorsByType = function (){
      
      var simpleValidators = [];
      
      simpleValidators.push('required');
      
      switch(this.type.toUpperCase()){
          
            case 'TEXTTYPE':
                  simpleValidators.push('minLength' ,'maxLength', 'regEx');
                 break;
            case 'DROPDOWNTYPE':
                  simpleValidators.push('minLength', 'maxLength', 'regEx');
                  break;
            case 'CFDITYPE':
            case 'FILETYPE':
                   simpleValidators.push('fileExtension');
                  break;
            case 'DATETYPE':
            case 'DATETIMETYPE':
            case 'MULTILINETYPE':
            default:;
          
          
      }
      
      return simpleValidators;
      
    };
    Field.prototype.addValidator = function(validator){
        debugger;
        this.validators.push(validator);
    };
    
    return Field;
});