angular.module("PSFcreator")
    .directive('sectionNavigationPath', function () {
        return {
            restrict: "E",
            scope: {
                section: "="
            },
            template: "<ul class='breadcrumb'><li ng-repeat='parent in parents' style='display:inline;'><span class='glyphicon glyphicon-triangle-right' aria-hidden='true'></span> <a  href='#/section/detail/{{parent.name}}'>{{parent.name}}</a>           </li> </ul>",
            controller: function ($scope) {
                
                function createNavigationPath() {
                    var parents = [];
                    var current = $scope.section.parent;
                    while (current != undefined) {
                        parents.push(current);
                        current = current.parent;
                    }
                    //Los devolvemos con reverse para mostrar el primer parent a la derecha.
                    return parents.reverse();
                }
                $scope.parents = createNavigationPath();
            },
            link: function (scope, element, attr) {
                var ulist = element.find('ul');
                ulist.css({
                    listStyleType: 'none'
                });

            }
        };
    });