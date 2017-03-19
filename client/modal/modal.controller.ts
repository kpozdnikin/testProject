import { NewsItem } from '../news/newsItem';

export class ModalController {

    static $inject: ['$uibModalInstance', 'item', 'type'];
    newsItem: NewsItem;

    constructor(private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, public item, public type) {
    }

    $onInit() {

    }

    cancel() : void{
        this.$uibModalInstance.close();
    }
}
