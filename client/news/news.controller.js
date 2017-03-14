(function () {
    'use strict';

    angular
        .module('main.news')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$uibModal', 'news'];

    function NewsController($uibModal, news) {

        var vm = this;

        //functions
        vm.activate = activate;
        vm.openItem = openItem;
        //variables
        vm.news = news;

        activate();

        function activate(){}

        function openItem(news){
            $uibModal.open({
                controller: 'ModalController',
                controllerAs: 'vm',
                templateUrl: '/modal/modal.html',
                size : 'lg',
                resolve: {
                    item: news,
                    type: 1
                },
                animation: false
            });
        }
    }
})();

