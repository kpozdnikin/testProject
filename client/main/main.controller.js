(function () {
    'use strict';

    angular
        .module('main')
        .controller('MainController', MainController);

    MainController.$inject = ['$scope'];

    function MainController($scope) {

        var vm = this;

        //functions
        $scope.activate = activate;
        //variables

        activate();

        function activate(){
            console.log('Main');
        }
    }
})();

