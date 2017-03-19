/*
'use strict';

angular
    .module('main')
    .config(config);

function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/').when('/', '/home');

    //root route
    $stateProvider
        .state('main', {
            url: '',
            controllerAs: 'vm',
            title: 'mainPage'
        })
        .state('home', {
            url: '/home',
            controller: 'HomeController',
            controllerAs: 'vm',
            templateUrl: '/home/home.html',
            resolve:{
                smallEvents: resolveEventsHome,
                smallNews: resolveNewsHome
            },
            title: 'news'
        })
        .state('news', {
            url: '/news',
            controller: 'NewsController',
            controllerAs: 'vm',
            templateUrl: '/news/news.html',
            resolve: {
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
        return MainService.getNews(4, 0).then(function (resp) {
            return resp.data || null;
        });
    }
    //getting events from backend
    resolveEvents.$inject = ['MainService'];
    function resolveEvents(MainService) {
        return MainService.getEvents(4, 0).then(function (resp) {
            return resp.data || null;
        });
    }

    //small versions of items for home page
    resolveNewsHome.$inject = ['MainService'];
    function resolveNewsHome(MainService) {
        return MainService.getNews(3, 0).then(function (resp) {
            return resp.data || null;
        });
    }
    resolveEventsHome.$inject = ['MainService'];
    function resolveEventsHome(MainService) {
        return MainService.getEvents(3, 0).then(function (resp) {
            return resp.data || null;
        });
    }
}*/
