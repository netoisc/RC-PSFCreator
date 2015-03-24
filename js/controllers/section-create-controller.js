angular.module('PSFcreator')
.controller('CreateSectionCtrl',function($scope,$routeParams,$location, Section){
    this.section= new Section('','','');
    this.save = function(){        
        console.log('save');
        $scope.addSectionToPSF(this.section);
        $location.path('/');
    };
});