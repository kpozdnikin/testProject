(function () {
    'use strict';

    angular
        .module('main.events')
        .controller('EventsController', EventsController);

    EventsController.$inject = ['$scope'];

    function EventsController($scope) {

        var vm = this;

        //functions
        $scope.activate = activate;
        //variables

        activate();

        function activate(){

        }
    }
})();

