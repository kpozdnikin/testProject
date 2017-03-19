export class MainService {

    static $inject = ['$http'];

    constructor(private $http: ng.IHttpService) {}

    getNews(limit, skip) {
        return this.$http.get('/api/news?limit=' + limit + '&skip=' + skip).then(response => response.data);
    }

    getEvents(limit, skip) {
        return this.$http.get('/api/events?limit=' + limit + '&skip=' + skip).then(response => response.data);
    }
}