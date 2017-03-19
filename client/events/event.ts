export class Event {
    constructor(
        public name: string = '',
        public image: String = '',
        public description: String = '',
        public dateStart: Date = new Date(),
        public dateEnd: Date = new Date(),
        public text: String,
    ) { }
}