angular.module('PSFcreator')
    .directive('sectionDetail', function ($window) {
        return {
            restrict: "E",
            templateUrl: "templates/directives/section-detail.html",
            scope: {
                section: "=",
                deleteSectionFnc:"&"
            },
            controller: function ($scope) {
                $scope.deleteChildSection = function (sectionId) {
                    if ($window.confirm('Estás seguro de eliminar la sección:' + sectionId)) {
                        $scope.section.deleteSectionByName(sectionId);
                    }
                }
                
            }
        };
    });