angular.module('PSFcreator')
.controller('CreateValidatorController',function(){
    var self= this;
    self.validatorType ='';
    this.addValidatorToField= function(field){
        debugger;
        field.addValidator(self.validatorType);
    }
});