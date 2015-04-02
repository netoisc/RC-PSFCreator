angular.module('PSFcreator')
    .factory('Field', function () {

        function Field(type, name, displayName, helpText, description) {
            var self = this;
            self.type = type || '';
            self.name = name;
            self.displayName = displayName || '';
            self.helpText = helpText || '';
            self.description = description || '';
            self.validators = [];
            self.promotions = [];
            
            //behaviors
            self.validatorNotExists = function (validatorType) {
                
                var noexiste = true;
                for (var i = 0; i < self.validators.length; i++) {
                    if (self.validators[i].type == validatorType) {
                        noexiste = false;
                        break;
                    }
                }
                return noexiste;
            };
        }



        Field.prototype.getValidatorsByType = function () {

            var simpleValidators = [];

            simpleValidators.push('required');

            switch (this.type.toUpperCase()) {

            case 'TEXTTYPE':
                simpleValidators.push('minLength', 'maxLength', 'regEx');
                break;
            case 'DROPDOWNTYPE':
                simpleValidators.push('minLength', 'maxLength', 'regEx');
                break;
            case 'CFDITYPE':
            case 'FILETYPE':
                simpleValidators.push('fileExtension');
                break;
            case 'DATETYPE':
            case 'DATETIMETYPE':
            case 'MULTILINETYPE':
            default:
                ;


            }            
            return simpleValidators;

        };
        Field.prototype.addValidator = function (validator) {
            this.validators.push(validator);
        };


        return Field;
    });