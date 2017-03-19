import { EventsController } from './events.controller';

export const EventsComponent: angular.IComponentOptions = {
    bindings: {
        events: '<'
    },
    controller: EventsController,
    templateUrl: './events/events.html'
};
