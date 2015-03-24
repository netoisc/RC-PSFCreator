angular.module('PSFcreator')
.factory('PSF',function(){
    function PSF (name,title){
        var self = this;
        self.name = name || '';
        self.title = title || '';
        self.sections = [];
    }
    return PSF;
});