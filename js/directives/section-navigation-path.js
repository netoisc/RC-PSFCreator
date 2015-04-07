angular.module("PSFcreator")
    .directive('sectionNavigationPath', function () {
        return {
            restrict: "E",
            scope: {
                section: "="
            },
            template: "<ul id='navigatorPath'><li ng-repeat='parent in parents' style='display:inline;'><a class='glyphicon glyphicon-menu-right' href='#/section/detail/{{parent.name}}'>{{parent.name}}</a><span></span></li> </ul>",
            controller: function ($scope) {
                
                function createNavigationPath() {
                    var parents = [];
                    var current = $scope.section.parent;
                    while (current != undefined) {
                        parents.push(current);
                        current = current.parent;
                    }
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