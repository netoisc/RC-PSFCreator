angular.module('PSFcreator')
    .factory('Section', function ($window) {

        function Section(name, titulo, instrucciones) {
            var self = this;
            self.name = name || '';
            self.titulo = titulo || '';
            self.instrucciones = instrucciones || '';
            self.sections = [];
            self.fields = [];
            //behaviors
            self.parent =undefined;
            
        }

        Section.prototype.addChild= function(section){
            if(true){ //si la sección es válida
                section.parent= this.name;
                this.sections.push(section);
            }
        };
        //return undefined if no match
        Section.prototype.findField = function (fieldName) {
            var fieldFound = undefined;
            var length = this.fields.length;

            for (var i = 0; i < length; i++) {

                if (this.fields[i].nombre === fieldName) {
                    fieldFound = this.fields[i];
                }
            }
            return fieldFound;

        };
        Section.prototype.deleteField = function (fieldIndex) {
            var field = this.fields[fieldIndex];
            if ($window.confirm('Estás seguro de eliminar este campo:' + field.name)) {
                this.fields.splice(fieldIndex, 1);
            }
        };


        //return undefined if no match
        Section.prototype.deleteSectionByName = function (sectionName) {
            var index = 0;
            for (index = 0; index < this.sections.length; index++) {
                if (this.sections[index].name === sectionName) {
                    if (confirm('Estás seguro de eliminar la sección: ' + sectionName)) {
                        this.sections.splice(index, 1);
                        break;
                    }
                }
            }


        };
        return Section;
    });