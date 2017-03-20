import * as angular from 'angular';
import {NewsItem} from "../news/newsItem";
import {Event} from "../events/event";


export interface NewsServerResponse{
    data: NewsItem[];
}

export interface EventsServerResponse{
    data: Event[];
}


export class MainService {

    static $inject = ['$http'];

    constructor(private $http: angular.IHttpService) {}

    getNews(limit, skip) : angular.IPromise<any> {
        return this.$http.get('/api/news?limit=' + limit + '&skip=' + skip).then((response : angular.IHttpPromiseCallbackArg<NewsServerResponse>) => response.data );
    }

    getEvents(limit, skip) : angular.IPromise<any> {
        return this.$http.get('/api/events?limit=' + limit + '&skip=' + skip).then((response : angular.IHttpPromiseCallbackArg<EventsServerResponse>) => response.data);
    }
}