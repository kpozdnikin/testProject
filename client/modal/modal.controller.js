(function () {
    'use strict';

    angular
        .module('main')
        .controller('ModalController', ModalController);

    ModalController.$inject = ['$uibModalInstance', 'item', 'type'];

    function ModalController($uibModalInstance, item, type) {

        var vm = this;

        //functions
        vm.activate     = activate;
        vm.cancel       = cancel;
        //variables
        vm.item         = item;
        vm.type         = type;

        activate();

        function activate(){}

        // Закрыть модальное окно
        function cancel(){
            $uibModalInstance.dismiss('cancel');
        }

    }
})();

