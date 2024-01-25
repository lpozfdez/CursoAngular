

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {

    audioVolume: 90,
    songDuration: 36,
    song: "Baby one more time",
    details: {
        author: "Britney Spears",
        year: 1995
    }

}
// SE MUESTRA NORMAL
//console.table(audioPlayer)
//console.log('Song: ', audioPlayer.song);
//console.log('Author: ', audioPlayer.details.author);

//SE MUESTRA CON DESESTRUCTURACION

const song = 'New song';

const { song: anotherSong, songDuration: duration } = audioPlayer;
const { author} = audioPlayer.details;

console.log('Song: ', anotherSong);
console.log('Duration: ', duration);
console.log('Author: ', author);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//SIN DESESTRUCTURACION
// console.log('Personaje 3: ', dbz[2]);
// const trunks=dbz[3] || 'No hay personaje';
// console.log('Personaje 3: ', trunks);

//CON DESESTRUCTURACION
const [ , , trunks = 'Not found' ]: string[]= ['Goku', 'Vegeta', 'Trunks'];
console.log('Personaje 3: ', trunks);

export {};