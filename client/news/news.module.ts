import * as angular from 'angular';
import { NewsComponent } from './news.component';

export const NewsModule = angular
    .module('app.news', [])
    .component('news', NewsComponent)
    .name;