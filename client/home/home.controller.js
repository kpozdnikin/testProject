(function () {
    'use strict';

    angular
        .module('main.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'smallEvents', 'smallNews'];

    function HomeController($scope, smallEvents, smallNews) {

        var vm = this;

        //functions
        $scope.activate = activate;
        //variables
        vm.smallEvents  = smallEvents;
        vm.smallNews    = smallNews;

        activate();

        function activate(){
            console.log('Home');
        }
    }
})();

