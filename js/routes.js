angular.module('PSFcreator').config(function($routeProvider){
    
   $routeProvider.when('/section/new',{
       templateUrl: 'templates/pages/section/createOrEdit.html',
       controller: 'CreateSectionCtrl',
       controllerAs: 'sectionCtrl'
   })
   .when('/section/add/:idParentSection',{
       templateUrl: 'templates/pages/section/createOrEdit.html',
       controller:'CreateSectionCtrl',
       controllerAs:'sectionCtrl'
   })
   .when('/section/edit/:idSection', {
       templateUrl: 'templates/pages/section/createOrEdit.html',
       controller:'EditSectionCtrl',
       controllerAs:'sectionCtrl'
   })
   .when('/section/detail/:idSection',{
         templateUrl:'templates/pages/section/detail.html',
         controller:'DetailSectionCtrl',
         controllerAs:'detailSectionCtrl'
         })
   .when('/field/create/:idSection',{
       templateUrl: 'templates/pages/field/createOrEdit.html',
       controller:'FieldCreateCtrl',
       controllerAs:'fieldCtrl'
   })
   .when('/field/edit/:idSection/:index',{
       templateUrl: 'templates/pages/field/createOrEdit.html',
       controller:'FieldEditCtrl',
       controllerAs:'fieldCtrl'
   })   
   .when('/', {
       templateUrl:'templates/pages/psf/edit.html',
       controller:'PSFEditController',
       controllerAs:'listSectionCtrl'
   });


});