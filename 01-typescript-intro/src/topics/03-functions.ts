interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
function addNumbers( a:number, b: number ):number {
    return a + b;
}

const addNumbersArrow = (a: number, b: number ):string => `${a + b}`;

function multiply( firstNumber: number, secondNumber?: number, base: number = 2) {
    return firstNumber * base;
}

const healCharacter = (character: Character, amount: number ) => {
    
    character.hp += amount;
    

}

const strider: Character = {
    name: 'Aragorn',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`);
    }
}


healCharacter( strider , 10);
healCharacter( strider , 110);


strider.showHp();

/*
const result: number= addNumbers(1 , 2);
const result2: string= addNumbersArrow(1 , 2);
const multiplyResult: number= multiply(5);
*/

//console.log( {result, result2, multiplyResult} );

export {};