angular.module('PSFcreator').config(function($routeProvider){
    
   $routeProvider.when('/section/new',{
       templateUrl: 'templates/pages/section/section-new.html',
       controller: 'CreateSectionCtrl',
       controllerAs: 'newSection'
   })
   .when( '/field/new',{
       templateUrl: 'templates/pages/field/edit.html',
       controller: 'FieldCreateCtrl',
       controllerAs: 'newField'
   })
   .when('/field/create/:idSection',{
       templateUrl: 'templates/pages/field/edit.html',
       controller:'FieldCreateCtrl',
       controllerAs:'createField'
   })
   .when('/', {
       templateUrl:'templates/pages/section/section-list.html'       
   });


});