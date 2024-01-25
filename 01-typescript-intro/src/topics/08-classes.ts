
export class Person {
    // public name: string | undefined;
    // private address: string;

    constructor( 
        public firtName: string, 
        public lastName: string, 
        private address: string = 'No address'
    ) {}
}

// export class Hero extends Person {
//     constructor (
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ){
//         super(realName, 'New York');
//     }
// }

export class Hero {

    constructor (
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ){
        //this.person = new Person (realName);
    }
}

const tony = new Person( 'Tony', 'Starks', 'New York' );
const ironman = new Hero( 'Ironman', 45, 'Tony Starks' , tony);

console.log(ironman);