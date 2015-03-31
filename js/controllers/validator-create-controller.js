angular.module('PSFcreator')
.controller('CreateValidatorController',function(Validator){
    var self= this;
    self.validator = new Validator('','','');    
  
    this.addValidatorToField= function(field){        
        field.addValidator(self.validator);
        self.validator=new Validator('','','');    
        
    }
    
});