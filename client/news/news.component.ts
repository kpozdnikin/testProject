import { NewsController } from './news.controller';

export const NewsComponent: angular.IComponentOptions = {
    bindings: {
        news: '<'
    },
    controller: NewsController,
    templateUrl: './news/news.html'
};
