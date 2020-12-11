const fs = require('fs');

const lines = fs.readFileSync('day6Input.txt', {
    encoding: 'utf-8'
}).trim().split('\n\n').filter(x => x);



var part1 = (lines) => {
    let count = 0;
    for (let l of lines) {
        // replace the line breaks and then make a set --> in a set every character is unique
        const s = new Set(l.replace(/[\n\s]/g, "").split(""));
        count += s.size;
    }
    return count;
};

console.log(part1(lines));

// PART 2
var part2 = (lines) => {
    let count = 0;
    for (let l of lines) {
        const unique = new Set(l.replace(/[\n\s]/g, "").split(""));
        // use again the unique set of every line
        // put them together in one array and then check for every character, how many times this character is included in the rest of the array
        count += [...unique].filter(char => l.split('\n').filter(x=>x).every(f => f.includes(char))).length;
    }

    return count;
}

console.log(part2(lines));