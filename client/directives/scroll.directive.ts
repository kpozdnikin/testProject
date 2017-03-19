export const scrolly = () => {
    'ngInject';
    return {
        restrict: 'A',
        link($scope, $element, $attrs) {
            var raw = $element[0];
            $element.bind('scroll', function () {
                if (raw.scrollTop + raw.offsetHeight + 100 > raw.scrollHeight) {
                    $scope.$apply($attrs.scrolly);
                }
            });
        }
    }
};
