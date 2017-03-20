import * as angular from 'angular';
import { NewsItem } from '../news/newsItem';
import { Event } from '../events/event';

export class MainService {

    static $inject = ['$http'];

    constructor(private $http: angular.IHttpService) {}

    getNews<T>(limit, skip) {
        return this.$http.get('/api/news?limit=' + limit + '&skip=' + skip).then((response: angular.IHttpPromiseCallbackArg<any>) => response.data);
    }

    getEvents<T>(limit, skip) {
        return this.$http.get('/api/events?limit=' + limit + '&skip=' + skip).then((response: angular.IHttpPromiseCallbackArg<any>) => response.data);
    }
}