(function () {
    'use strict';

    angular
        .module('main.events')
        .controller('EventsController', EventsController);

    EventsController.$inject = ['$uibModal', 'events'];

    function EventsController($uibModal, events) {

        var vm = this;

        //functions
        vm.activate = activate;
        vm.openItem = openItem;
        //variables
        vm.events   = events;

        activate();

        function activate(){}

        function openItem(event){
            $uibModal.open({
                controller: 'ModalController',
                controllerAs: 'vm',
                templateUrl: '/modal/modal.html',
                size : 'lg',
                resolve: {
                    item: event,
                    type: 2
                },
                animation: false
            });
        }
    }
})();

