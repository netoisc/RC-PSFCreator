angular.module('PSFcreator')
.factory('Validator',function(){
    
    function Validator(type,value,message) {
        
        this.type = type || '';
        this.value = value || ''  ;
        this.message = message  ;
    }
  
  
    //Validate the validatos :) 
    //Example minLenght can´t have a value of  "/ab+c/" 
    Validator.prototype.isValid = function(){
      
      //Validators permited : 
      // -required
      // -minLength
      // -maxLength
      // -fileExtension
      //
      
      //value always be number  
      if(this.type=="minLength"){
        var isNumber = Number.isInteger(this.value);
        if(isNumber&& this.value>0){
          return true;
        } else {
          return false;
        }
      }
        
      //value always be number  
      else if(this.type=="maxLength"){
        var isNumber = Number.isInteger(this.value);
        if(isNumber&& this.value>0){
          return true;
        } else {
          return false;
        }
      }
      else if(this.type =="regEx"){
        if(this.value.length > 0){
          return true
        }
        return false;
      }
      else if ( this.type == "required" ||  this.type == "fileExtension" ) {
        return true;
      } else {
        //Any other value is not a valid validator
        return false;
      }
    
    };
  
    return Validator;
});