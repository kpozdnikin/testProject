import { MainService } from '../services/mainService';
import { NewsItem } from '../news/newsItem';
import { ModalController } from '../modal/modal.controller'

export class NewsController {

    static $inject: ['$scope', '$uibModal', 'MainService'];
    news: NewsItem[];

    constructor(private MainService: MainService, private $uibModal: ng.ui.bootstrap.IModalService) {
    }

    $onInit() : void {
        this.news = [];
        this.MainService.getNews(4, 0).then(response => this.news = response.data);
    }

    openItem(news) : void{
        this.$uibModal.open({
            controller: ModalController,
            controllerAs: '$ctrl',
            templateUrl: '/modal/modal.html',
            size : 'lg',
            resolve: {
                item: news,
                type: 1
            },
            animation: false
        });
    }

    getMoreItems() : void{
        this.MainService.getNews(4, this.news.length - 1).then(response => {
            if(response && response.data) {
                this.news = this.news.concat(response.data);
            }
        })
    }
}
