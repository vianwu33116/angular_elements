export class Hero{
    date: Date;
    constructor(
        public name: string,
        public email: string
      ) { 
        this.date = new Date(); 
      }
}