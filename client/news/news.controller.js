(function () {
    'use strict';

    angular
        .module('main.news')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$scope'];

    function NewsController($scope) {

        var vm = this;

        //functions
        $scope.activate = activate;
        //variables

        activate();

        function activate(){

        }
    }
})();

