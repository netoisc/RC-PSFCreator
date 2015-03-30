angular.module('PSFcreator')
    .directive('psfTrField', function () {
        return {
            restrict: "A",
            replace:true,
            templateUrl: "templates/directives/psf-tr-field.html",
            scope: {
                nombre: "=",
                tipo: "=",
                id: "=",
                idsection:"=",
                index:"=",
                deleteCallback:"&"
            },
            link: function(scope, element, attrs){
                
                element.find('a.deletable').on("click",function(){                    
                    scope.deleteCallback();
                    scope.$apply();
                });
            }

        };
    });