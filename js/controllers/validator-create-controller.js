angular.module('PSFcreator')
.controller('CreateValidatorController',function(){
    var self= this;
    self.validatorType ='';
    self.validatorValue = '';
    self.validatorMessage = '';
  
    this.addValidatorToField= function(field){
        debugger;
        field.addValidator(self.validatorType);
    }
});