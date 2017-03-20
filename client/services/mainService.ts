import * as angular from 'angular';

interface ProjectResult {
    data: Object
}

export class MainService {

    static $inject = ['$http'];

    constructor(private $http: angular.IHttpService) {}

    getNews(limit, skip) {
        return this.$http.get('/api/news?limit=' + limit + '&skip=' + skip).then((response: ProjectResult) => response.data);
    }

    getEvents(limit, skip) {
        return this.$http.get('/api/events?limit=' + limit + '&skip=' + skip).then((response: ProjectResult) => response.data);
    }
}