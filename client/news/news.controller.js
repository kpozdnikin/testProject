/*
(function () {
    'use strict';

    angular
        .module('main.news')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['$uibModal', 'MainService', 'news'];

    function NewsController($uibModal, MainService, news) {

        var vm = this;

        //functions
        vm.activate     = activate;
        vm.openItem     = openItem;
        vm.getMoreItems = getMoreItems;
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

        function getMoreItems(){
            MainService.getNews(4, vm.news.length - 1).then(function (resp) {
                if(resp && resp.data){
                    vm.news = vm.news.concat(resp.data);
                }
            })
        }
    }
})();
*/
