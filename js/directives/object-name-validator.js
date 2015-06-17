angular.module('PSFcreator')
.directive('uniquename',function($q,$timeout){
    return{
        require:'ngModel',
        link:function(scope,elm,attrs,ctrl){
            ctrl.$asyncValidators.uniquename = function(modelValue, viewValue) {

        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return $q.when();
        }

        var def = $q.defer();

        $timeout(function() {
          // Mock a delayed response
          if (scope.uniqueObjectNames.indexOf(modelValue) === -1) {
            // The username is available
            def.resolve();
          } else {
            def.reject();
          }

        }, 500);

        return def.promise;
      };
        }
        
    }
});