import * as angular from 'angular';
import { EventsComponent } from './events.component';

export const EventsModule = angular
    .module('app.events', [])
    .component('events', EventsComponent)
    .name;