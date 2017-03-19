import { MainService } from '../services/mainService';
import { Event } from '../events/event';
import { ModalController } from '../modal/modal.controller'

export class EventsController {

    static $inject: ['$scope', '$uibModal', 'MainService'];
    events: Event[];

    constructor(private MainService: MainService, private $uibModal: ng.ui.bootstrap.IModalService) {
    }

    $onInit() {
        this.events = [];
        this.MainService.getEvents(4, 0).then(response => this.events = response.data);
    }

    openItem(event) : void{
        this.$uibModal.open({
            controller: ModalController,
            controllerAs: '$ctrl',
            templateUrl: '/modal/modal.html',
            size : 'lg',
            resolve: {
                item: event,
                type: 2
            },
            animation: false
        });
    }

    getMoreItems() : void{
        this.MainService.getEvents(4, this.events.length - 1).then(response => {
            if(response && response.data) {
                this.events = this.events.concat(response.data);
            }
        })
    }
}
