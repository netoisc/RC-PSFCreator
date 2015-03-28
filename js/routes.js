angular.module('PSFcreator').config(function($routeProvider){
    
   $routeProvider.when('/section/new',{
       templateUrl: 'templates/pages/section/section-new.html',
       controller: 'CreateSectionCtrl',
       controllerAs: 'newSection'
   })   
   .when('/field/create/:idSection',{
       templateUrl: 'templates/pages/field/create.html',
       controller:'FieldCreateCtrl',
       controllerAs:'createField'
   })
   .when('/field/edit/:idSection/:index',{
       templateUrl: 'templates/pages/field/edit-field.html',
       controller:'FieldEditCtrl',
       controllerAs:'editField'
   })
   .when('/field/delete/:idSection/:index',{
       controller:'FieldDeleteCtrl',
       templateUrl: 'templates/delete-confirmation.html',
       controllerAs:'editField'
   })
   .when('/section/add/:idParentSection',{
       templateUrl: 'templates/pages/section/section-new.html',
       controller:'CreateSectionCtrl',
       controllerAs:'newSection'
   })
   .when('/', {
       templateUrl:'templates/pages/section/section-list.html'       
   });


});