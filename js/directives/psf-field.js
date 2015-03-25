angular.module('PSFcreator')
.directive('psfField', function() {
  return {
    replace: true,
    restrict: "E",
    scope: {
      Nombre: "=",
      Tipo: "=",
      Validators: "=",
      Promotions: "=",
      id: "="
    },
    templateUrl: "templates/directives/psf-field.html"
  };
});