angular.module('PSFcreator')
.factory('Section',function(){
    
    function Section(name, titulo, instrucciones) {
        var self = this;
        self.name = name || '';
        self.titulo = titulo || '';
        self.instrucciones = instrucciones || '';
        self.sections = [];
        
    }
    return Section;
});