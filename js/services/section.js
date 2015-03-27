angular.module('PSFcreator')
.factory('Section',function(){
    
    function Section(name, titulo, instrucciones) {
        var self = this;
        self.name = name || '';
        self.titulo = titulo || '';
        self.instrucciones = instrucciones || '';
        self.sections = [];
        self.fields=[];
        
    }
    
    
    //return undefined if no match
    Section.prototype.findField= function (fieldName){
        var fieldFound = undefined;
        var length = this.fields.length;
        var stop = "";
        for(var i = 0 ;i<length ; i++ ){
            
            if(this.fields[i].Nombre=== fieldName){
                fieldFound = this.fields[i];
            }
        }
        return fieldFound;
        
    };
    
    
    //return undefined if no match
    Section.prototype.updateField= function (oldFieldName, newField){
        this.fields.push({
            "Tipo":"CFDI",
            "Nombre":"nuevo no Actualiza",
            "DisplayName":"nuevo DisplayName",
            "HelpText":" helpTextNuevo",
            "Instructions":" helpTInstructionso"
        });
        
    };
    return Section;
});