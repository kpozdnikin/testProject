import * as angular from 'angular';

export class MainService {

    static $inject = ['$http'];

    constructor(private $http: angular.IHttpService) {}

    getNews(limit, skip) {
        return this.$http.get('/api/news?limit=' + limit + '&skip=' + skip).then((response: any) => response.data);
    }

    getEvents(limit, skip) {
        return this.$http.get('/api/events?limit=' + limit + '&skip=' + skip).then((response: any) => response.data);
    }
}