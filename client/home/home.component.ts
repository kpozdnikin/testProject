import { HomeController } from './home.controller';

export const HomeComponent: angular.IComponentOptions = {
    bindings: {
        smallNews: '<',
        smallEvents: '<'
    },
    controller: HomeController,
    templateUrl: './home/home.html'
};