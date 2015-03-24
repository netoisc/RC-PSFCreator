angular.module('PSFcreator')
.controller('CreateSectionCtrl',function($scope,$routeParams,Section){
    this.section= new Section('','','');
    this.save = function(){        
        console.log('save');
        $scope.addSectionToPSF(this.section);
    };
});