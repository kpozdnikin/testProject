export class NewsItem {
    constructor(
        public name: string = '',
        public image: String = '',
        public description: String = '',
        public dateCreate: Date = new Date(),
        public text: String,
    ) { }
}