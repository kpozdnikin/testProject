(function () {
    'use strict';

    angular
        .module('main.events')
        .controller('EventsController', EventsController);

    EventsController.$inject = ['$uibModal', 'MainService', 'events'];

    function EventsController($uibModal, MainService, events) {

        var vm = this;

        //functions
        vm.activate     = activate;
        vm.openItem     = openItem;
        vm.getMoreItems = getMoreItems;
        //variables
        vm.events       = events;

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

        function getMoreItems(){
            MainService.getEvents(4, vm.events.length - 1).then(function (resp) {
                if(resp && resp.data){
                    vm.events = vm.events.concat(resp.data);
                }
            })
        }
    }
})();

