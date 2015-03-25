angular.module('PSFcreator')
.controller('CreateSectionCtrl',function($scope,$routeParams,$location, Section){
    this.section= new Section('','','');
    this.save = function(){                
        $scope.addSectionToPSF(this.section);
        $location.path('/');
    };
    this.cancel= function(){
        $location.path('/');
    };
});