import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module'
import { EventsModule } from './events/events.module';
import { AppComponent } from './app.component';
import { MainService } from './services/mainService';
import { scrolly } from './directives/scroll.directive'

const app = angular
    .module('app', ['ui.router', 'ui.bootstrap', HomeModule, EventsModule, NewsModule])
    .component('main', AppComponent)
    .directive('scrolly', scrolly)
    .config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider
            .state('main', {
                url: '',
                template: `<main></main>`
            })
            .state('main.home', {
                url: '/home',
                template: `<home></home>`,
            })
            .state('main.news', {
                url: '/news',
                template: `<news></news>`,
            })
            .state('main.events', {
                url: '/events',
                template: `<events></events>`,
            });
        $urlRouterProvider.when('', '/home').when('/', '/home');
        $urlRouterProvider.otherwise('/');
    })
    .service('MainService', MainService)
    .name;

export default app;