angular.module('PSFcreator')
.factory('PSF',function(){
    function PSF (name,title){
        var self = this;
        self.name = name || '';
        self.title = title || '';
        self.sections = [];
    }
    
    PSF.prototype.deleteSection = function (section) {
            var tmp = [];
            if(section ==='undefined') return;
            if (confirm('Estás seguro de eliminar la sección:' + section.name)) {
                for (var i = this.sections.length - 1; i >= 0; i--) {
                    debugger;
                    if (this.sections[i] != section) {
                        tmp.push(this.sections[i]);
                    }
                }
                this.sections = tmp;
            }
        };
    PSF.prototype.hasSections = function () {
            return this.sections.length > 0;
        };
    PSF.prototype.addSectionParent = function (section) {
            this.sections.push(section);
        };
    return PSF;
});