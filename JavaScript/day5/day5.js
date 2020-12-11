const fs = require('fs');

const lines = fs.readFileSync('day5Input.txt', {encoding: 'utf-8'}).split('\n').filter(x => x);

let stringToInt = (str) => {

    return parseInt([...str].map(x => x === 'B' || x === 'R' ?  1 : 0).join(''), 2);
} ;

class Seat {
    constructor(string){
        const chars = [...string];
        this.row = stringToInt(chars.slice(0, 7));
        this.column = stringToInt(chars.slice(7));
        this.id = this.row*8 + this.column;
    }
}
const seats = [];
for (const line of lines){
    const s = new Seat(line);
    seats.push(s);
}

//console.log(Math.max(...seats.map(s => s.id)));

const mySeatID = [...seats.map(s => s.id).sort((a,b)=>a-b).filter((element,index, array) => {
    let returnElement = 0;  
    if(array[index+1] - array[index] > 1){
        returnElement = element;
    }
    return Number(returnElement);
})];

console.log(mySeatID.map(x => parseInt(x)+1));