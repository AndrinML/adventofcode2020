var demo = [1721,
    979,
    366,
    299,
    675,
    1456,
]

var fs = require('fs');
var filename = "day1Input.txt";


fs.readFile(filename, 'utf8', (err, fileData) => {
    if (err) throw err;
    doCalculation(demo);
    //doCalculation(fileData.split("\n"));
});


const doCalculation = data => {
let newDataArray = data.map()
console.log(data);

};