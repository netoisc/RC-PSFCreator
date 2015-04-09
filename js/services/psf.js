angular.module('PSFcreator')
    .factory('PSF', function () {
        function PSF(name, title) {
            var self = this;
            self.name = name || '';
            self.title = title || '';
            self.sections = [];
        }

        PSF.prototype.deleteSection = function (section) {
            var indexSection = this.sections.indexOf(section);
            this.sections.splice(indexSection, 1);

        };
        PSF.prototype.hasSections = function () {
            return this.sections.length > 0;
        };
        PSF.prototype.addSectionParent = function (section) {
            this.sections.push(section);
        };
        return PSF;
    });