'use strict';

angular
    .module('main')
    .config(config);

function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/news/', '/news').when('/events/', '/events');

    //root route
    $stateProvider.state('main', {
        url: '/',
        controllerAs: 'vm',
        title: 'mainPage'
    });

    $stateProvider
        .state('news', {
            url: '/news',
            controller: 'NewsController',
            controllerAs: 'vm',
            templateUrl: '/news/news.html',
            resolve:{
                news: resolveNews
            },
            title: 'news'
    })
        .state('events', {
            url: '/events',
            controller: 'EventsController',
            controllerAs: 'vm',
            templateUrl: '/events/events.html',
            resolve:{
                events: resolveEvents
            },
            title: 'events'
    });

    //getting news from backend
    resolveNews.$inject = ['MainService'];
    function resolveNews(MainService) {
        return MainService.getNews(10, 0).then(function (resp) {
            return resp.data || null;
        });
    }
    //getting events from backend
    resolveEvents.$inject = ['MainService'];
    function resolveEvents(MainService) {
        return MainService.getEvents(10, 0).then(function (resp) {
            return resp.data || null;
        });
    }
}