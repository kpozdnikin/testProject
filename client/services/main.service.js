(function () {
    'use strict';

    angular
        .module('main')
        .service('MainService', MainService);

    MainService.$inject = ['$http'];

    function MainService($http) {

        var service = {
            getNews     : getNews,
            getEvents   : getEvents
        };
        return service;

        function getNews(limit, skip) {
            var url = '/api/news?limit=' + limit + '&skip=' + skip;
            return $http.post('url')
                .then(function (resp) {
                    console.log(resp);
                    if(resp.data.status == "success")
                        return resp.data;
                    else return false;
                }, function (err) {
                    console.log(err);
                    return err;
                });
        }

        function getEvents(limit, skip) {
            var url = '/api/events?limit=' + limit + '&skip=' + skip;
            return $http.post('url')
                .then(function (resp) {
                    console.log(resp);
                    if(resp.data.status == "success")
                        return resp.data;
                    else return false;
                }, function (err) {
                    return err;
                });
        }

    }
})();
