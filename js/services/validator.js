angular.module('PSFcreator')
.factory('Validator',function(){
    
    function Validator(type,value,message) {
        
        this.type = type || '';
        this.value = value  ;
        this.message = message  ;
    }
  
    return Validator;
});