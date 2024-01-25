export interface Passenger {
    name: string;
    children?: string[];
}


const p1: Passenger = {
    name: 'Lourdes',
}

const p2: Passenger = {
    name: 'Juan',
    children: ['Ana', 'Amalia']
}



const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length;

    console.log(passenger.name, howManyChildren);

    return howManyChildren;
}

printChildren(p2);