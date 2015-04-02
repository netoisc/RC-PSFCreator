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
       controller:'CreateSectionCtrl',
       controllerAs:'sectionCtrl'
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
       templateUrl:'templates/pages/section/section-list.html'       
   });


});