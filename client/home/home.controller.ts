import { MainService } from '../services/mainService';
import { NewsItem } from '../news/newsItem';

export class HomeController {

    static $inject: string[] = ['MainService'];
    smallNews: NewsItem[];
    smallEvents: Event[];

    constructor(private MainService: MainService) {}

    $onInit() {
        this.smallNews = [];
        this.smallEvents = [];
        this.MainService.getNews(3, 0).then(response => this.smallNews = response.data);
        this.MainService.getEvents(3, 0).then(response => this.smallEvents = response.data);
    }
}