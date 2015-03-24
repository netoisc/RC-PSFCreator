angular.module('PSFcreator').config(function($routeProvider){
    
   $routeProvider.when('/section/new',{
       templateUrl: 'templates/pages/section/section-new.html',
       controller: 'CreateSectionCtrl',
       controllerAs: 'newSection'
   });

});